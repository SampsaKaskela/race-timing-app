import './Header.css'

const Header = ({ url, setUrl }) => (
    <header className='header'>
        <h1 className='title'>Results</h1>
        <input placeholder='API endpoint' value={url} onChange={(event) => setUrl(event.target.value)} />
    </header>
)

export default Header
