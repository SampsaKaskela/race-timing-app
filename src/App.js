import './App.css'
import useFetch from './hooks/useFetch'
import useInterval from './hooks/useInterval'
import Table from './components/Table/Table'
import Header from './components/Header/Header'

const App = () => {
    const { data, url, setUrl, refresh } = useFetch('')
    useInterval(refresh, 5000)

    return (
        <>
            <Header url={url} setUrl={setUrl} />
            <main>
                <Table data={data} />
            </main>
        </>
    )
}

export default App
