import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
    return (
        <header className="container-fluid">
            <div className="grid">
                <Link to={'/'}>
                    <h2>My Blog</h2>
                </Link>

            </div>
            <Nav />
        </header>
    )
}

export default Header