import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="Header">
            <Link to={'/'}>
                <h2>Header</h2>
            </Link>
        </div>
    )
}

export default Header