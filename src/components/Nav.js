import { Link } from "react-router-dom"

const Nav = () => {
    const handleSearchChange = () => {
        console.log('search');
    }

    return (
        <div className="Nav">
            <nav>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input 
                        className="searchInput"
                        type="text" 
                        name="search" 
                        id="search"
                        onChange={handleSearchChange} 
                    />
                    <button className="searchBtn">Search</button>
                </form>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/postpage">Post</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav