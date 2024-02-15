import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="container-fluid">
            <Link to={'/'}>
                <h2>My Blog</h2>
            </Link>
        </header>
    )
}

export default Header