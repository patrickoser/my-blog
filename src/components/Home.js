import { useContext } from "react"
import Feed from "./Feed"
import DataContext from "../context/DataContext"

// 'posts' is passed as a deconstructed object to Home.
// Home then takes the contents of 'posts', uses a ternary operator to check their length, and
// if that length is >= 1 then the Feed component will be called, with posts as a prop, and map
// all available posts to the page.
// If the boolean comes back as false, or < 1, then 'No posts to display' will be displayed.
const Home = () => {
   const { posts, searchResults } = useContext(DataContext)

    const titleArray = [
        "These are my posts not yours!", 
        "I said what I said!", 
        "What do we have here..."
    ];
    const randomIndex = Math.floor(Math.random() * titleArray.length);
    const randomTitle = titleArray[randomIndex];

    return (
        <main id="Home" className="container">
            <h1>{randomTitle}</h1>
            {posts.length ? <Feed posts={searchResults} /> : <p>No Posts to display</p>}
        </main>
    )
}

export default Home