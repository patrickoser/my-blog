import { Link } from "react-router-dom"
import DataContext from "../context/DataContext"
import { useContext } from "react"
import Nav from "./Nav"

const Header = () => {
    const { toggleTheme, theme } = useContext(DataContext)

    return (
        <header className="container-fluid">
            <div className="grid">
                <Link to={'/'}>
                    <h2>My Blog</h2>
                </Link>
                <div className="toggleTheme">
                    {theme === 'dark' &&
                        <>
                            <i id="sun" style={{color: "#e0e3e7"}} className="fa-solid fa-sun fa-lg"></i>
                            <i onClick={toggleTheme} style={{color: "#e0e3e7"}} className="fa-solid fa-toggle-off fa-xl"></i>
                        </>
                    }
                    {theme !== 'dark' &&
                        <>
                            <i id="moon" className="fa-solid fa-moon fa-lg" style={{color: "#373c44"}}></i>
                            <i onClick={toggleTheme} style={{color: "#373c44"}} className="fa-solid fa-toggle-on fa-xl"></i>
                        </>
                    }
                </div>
            </div>
            <Nav />
        </header>
    )
}

export default Header 