import './App.css'
import useFetch from './hooks/useFetch'
import useInterval from './hooks/useInterval'
import Table from './components/Table/Table'
import Header from './components/Header/Header'
import { formatTime, getTotalTime } from './utils'
import Data from './Data'

const getColumns = (data) => {
    return [
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
        ...data[0]?.splits.map((split, index) => ({
            Header: `Split ${index + 1}`,
            accessor: `splits[${index}]`,
            Cell: ({ value }) => formatTime(value),
            width: 110
        })),
        {
            Header: 'Time',
            accessor: 'splits',
            Cell: ({ value }) => formatTime(getTotalTime(value)),
            width: 110,
        }
    ]
}

const App = () => {
    const { data, url, setUrl, refresh } = useFetch('')
    useInterval(refresh, 5000)

    return (
        <>
            <Header url={url} setUrl={setUrl} />
            <main>
                <Table data={Data} columns={getColumns(Data)} />
            </main>
        </>
    )
}

export default App
