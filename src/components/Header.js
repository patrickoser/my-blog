import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = ({theme, toggleTheme}) => {

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
                            {console.log(`Dark theme: ${theme}`)}
                        </>
                    }
                    {theme !== 'dark' &&
                        <>
                            <i id="moon" className="fa-solid fa-moon fa-lg" style={{color: "#373c44"}}></i>
                            <i onClick={toggleTheme} style={{color: "#373c44"}} className="fa-solid fa-toggle-on fa-xl"></i>
                            {console.log(`Light theme: ${theme}`)}
                        </>
                    }
                </div>
            </div>
            <Nav />
        </header>
    )
}

export default Header 