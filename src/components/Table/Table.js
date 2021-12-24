import './Table.css'
import { useTable, useSortBy, useFlexLayout, useRef } from 'react-table'
import { CSVLink } from 'react-csv'

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

    const headers = [
        { label: 'Driver', key: 'driver' },
        { label: 'Number', key: 'number' },
        { label: 'Splits', key: 'splits' },
        { label: 'Time', key:  '' }
    ]

    const csvReport = {
        filename: 'Data.csv',
        headers: headers,
        data: data
    }


    return (
        <div className='table-container'>
            <CSVLink {...csvReport}>Export to CSV</CSVLink>
            <table {...getTableProps()}
            >
                <thead>
                    {headerGroups.map((headerGroups) => (
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map( (column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    onClick={() => column.toggleSortBy(!column.isSortedDesc)}
                                >
                                    {column.render('Header')}

                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
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
