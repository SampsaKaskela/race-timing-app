import './Table.css'
import { useTable, useSortBy, useFlexLayout  } from 'react-table'

const Table = ({ data, columns }) => {
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
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroups) => (
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map( (column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    onClick={() => column.toggleSortBy(!column.isSortedDesc)}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map( (cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
