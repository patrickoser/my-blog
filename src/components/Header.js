import { Link } from "react-router-dom"
import useLocalStorage from 'use-local-storage'
import Nav from "./Nav"

const Header = () => {
    const rootElement = document.getElementById('root')
    const rootTheme = rootElement.getAttribute('data-theme')

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const toggleTheme = (e) => {
        e.preventDefault()
        if (rootTheme === 'light') {
            rootElement.setAttribute('data-theme', 'dark')
            setTheme('dark')
        } else {
            rootElement.setAttribute('data-theme', 'light')
            setTheme('light')
        }
      }

    return (
        <header className="container-fluid">
            <div className="grid">
                <Link to={'/'}>
                    <h2>My Blog</h2>
                </Link>
                <div className="toggleTheme">
                    <i onClick={toggleTheme} className="fa-solid fa-toggle-on"></i>
                </div>
            </div>
            <Nav />
        </header>
    )
}

export default Header 