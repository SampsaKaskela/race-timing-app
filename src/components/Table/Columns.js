import { formatTime, getTotalTime } from '../../utils'

export const COLUMNS = [
    {
        Header: 'Driver',
        accessor: 'driver',
        minWidth: 300,
    },
    {
        Header: 'Number',
        accessor: 'number',
        width: 110,
    },
    {
        Header: 'Split 1',
        accessor: 'splits[0]',
        Cell: ({ value }) => formatTime(value),
        width: 110,
    },
    {
        Header: 'Split 2',
        accessor: 'splits[1]',
        Cell: ({ value }) => formatTime(value),
        width: 110,
    },
    {
        Header: 'Split 3',
        accessor: 'splits[2]',
        Cell: ({ value }) => formatTime(value),
        width: 110,
    },
    {
        Header: 'Split 4',
        accessor: 'splits[3]',
        Cell: ({ value }) => formatTime(value),
        width: 110,
    },
    {
        Header: 'Split 5',
        accessor: 'splits[4]',
        Cell: ({ value }) => formatTime(value),
        width: 110,
    },
    {
        Header: 'Time',
        accessor: 'splits',
        Cell: ({ value }) => formatTime(getTotalTime(value)),
        width: 110,
    }
]
