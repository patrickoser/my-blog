import { useContext } from "react"
import { Link } from "react-router-dom"
import DataContext from "../context/DataContext"

const Nav = () => {
    const { search, setSearch } = useContext(DataContext)

    return (
        <div className="Nav">
            <nav>
                <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        className="searchInput"
                        type="text" 
                        name="search"
                        placeholder="Search Posts"
                        value={search}
                        id="search"
                        onChange={(e) => setSearch(e.target.value)} 
                    />
                    <button className="searchBtn">Search</button>
                </form>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/newpost">Post</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav