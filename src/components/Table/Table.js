import './Table.css'
import { useMemo } from 'react'
import { COLUMNS } from './Columns'
import { useTable, useSortBy, useFlexLayout  } from 'react-table'
import Data from './Data'


const Table = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Data, [])


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
        useFlexLayout
    )

    return (
        <div className='table-container'>
            <table {...getTableProps() }>
                <thead>
                    {
                        headerGroups.map((headerGroups) => (

                            <tr {...headerGroups.getHeaderGroupProps()}>
                                {headerGroups.headers.map( (column) => (
                                    <th   {...column.getHeaderProps(column.getSortByToggleProps())}
                                        onClick={() => column.toggleSortBy(!column.isSortedDesc)} >
                                        {column.render('Header')}</th>
                                ))}
                            </tr>

                        ))
                    }

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map( (cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>

    )
}

export default Table
