import { Link } from "react-router-dom"
import Nav from "./Nav"
import { useContext } from "react"
import DataContext from '../context/DataContext'

const Header = () => {
    const { toggleTheme } = useContext(DataContext)

    return (
        <header className="container-fluid">
            <div className="grid">
                <Link to={'/'}>
                    <h2>My Blog</h2>
                </Link>
                <button onClick={toggleTheme}>Light or Dark</button>
            </div>
            <Nav />
        </header>
    )
}

export default Header