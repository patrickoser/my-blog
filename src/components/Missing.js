import { Link } from "react-router-dom"
import Home from "./Home"

const Missing = () => {
    return (
        <main className="container">
            <hgroup>
                <h2>Opps... Looks like this page doesn't exists</h2>
                <h3>Want to return <Link to={'/'}>home</Link>?</h3>
            </hgroup>
        </main>
    )
}

export default Missing