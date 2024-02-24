import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
    const rootElement = document.getElementById('root')
    const rootTheme = rootElement.getAttribute('data-theme')

    const toggleTheme = (e) => {
        e.preventDefault()
        if (rootTheme === 'light') {
            rootElement.setAttribute('data-theme', 'dark')
        } else {
            rootElement.setAttribute('data-theme', 'light')
        }
      }

    return (
        <header className="container-fluid">
            <div className="grid">
                <Link to={'/'}>
                    <h2>My Blog</h2>
                </Link>
                <button onClick={(e) => toggleTheme(e)}></button>
            </div>
            <Nav />
        </header>
    )
}

export default Header