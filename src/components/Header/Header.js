import './Header.css'
import { formatTime } from '../../utils'
import { CSVLink } from 'react-csv'

const getHeaders = (data) => {
    return [
        { label: 'Driver', key: 'driver' },
        { label: 'Number', key: 'number' },
        ...data[0]?.splits.map((split, index) => ({
            label: `Split ${index + 1}`,
            key: `splits[${index}]`
        })),
        { label: 'Time', key: 'time' }
    ]
}

const formatData = (data) => {
    return data.map((item) => ({
        ...item,
        splits: item.splits.map((split) => formatTime(split))
    }))
}

const Header = ({ url, setUrl, data }) => {
    const csvReport = {
        filename: 'results.csv',
        headers: getHeaders(data),
        data: formatData(data)
    }
    return (
        <header className='header'>
            <h1 className='title'>Results</h1>
            <input placeholder='API endpoint' value={url} onChange={(event) => setUrl(event.target.value)} />
            <CSVLink {...csvReport} className='csv'>Export to CSV</CSVLink>
        </header>
    )
}

export default Header
