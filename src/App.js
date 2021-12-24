import './App.css'
import { useMemo } from 'react'
import useFetch from './hooks/useFetch'
import useInterval from './hooks/useInterval'
import Table from './components/Table/Table'
import Header from './components/Header/Header'
import { formatTime, getTotalTime, getFastestTime, getTimeDifference } from './utils'

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
            accessor: 'time',
            width: 110
        }
    ]
}

const App = () => {
    const { data, url, setUrl, refresh } = useFetch(process.env.NODE_ENV === 'production' ? '' : '/results')
    useInterval(refresh, 5000)

    const results = useMemo(() => {
        if (!data) {
            return []
        }
        const fastest = getFastestTime(data)
        return data.map((result) => {
            const totalTime = getTotalTime(result.splits)
            return {
                ...result,
                time: `${formatTime(totalTime)} ${getTimeDifference(totalTime, fastest)}`
            }
        })
    }, [data])

    return (
        <>
            <Header data={results} url={url} setUrl={setUrl} />
            {results.length > 0 && (
                <main>
                    <Table data={results} columns={getColumns(results)} />
                </main>
            )}
        </>
    )
}

export default App
