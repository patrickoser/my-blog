import axios from "../api/axios"

const Home = () => {
    const getPosts = async () => {
        try {
            const response = await axios.get('')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="Home">
            <h1>Home</h1>
        </div>
    )
}

export default Home