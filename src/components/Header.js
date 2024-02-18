import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
    return (
        <header className="container-fluid">
            <Link to={'/'}>
                <h2>My Blog</h2>
            </Link>
            <Nav />
        </header>
    )
}

export default Header