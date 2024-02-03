import { createContext, useEffect, useState } from "react";
import api from '../api/postsAxios'

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    // Initialize state for following variables and methods to set them
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    // Pulls posts in from server and updates state to display them when page loads
    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await api.get('/posts')
                setPosts(response.data)
            } catch(err) {
                console.log(`Error: ${err.message}`)
            }
        }

        getPosts()
    }, [])

    // Updates list of posts depending on what the user types into search bar
    useEffect(() => {
        const filteredResults = posts.filter((post) => 
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase()))

        setSearchResults(filteredResults)
    }, [posts, search])
    
    return (
        <DataContext.Provider value={{
            posts, setPosts, search, setSearch, searchResults, setSearchResults
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
/*
{
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
},
{
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
},
{
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
},
{
    id: 4,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
}
*/