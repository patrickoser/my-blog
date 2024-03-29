import { createContext, useEffect, useState } from "react";
import api from '../api/postsAxios'
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns'

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    // Initialize state for following variables and methods to set them
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    const navigate = useNavigate()

    // The (C)reate portion of CRUD.
    // id is assigned based on the number of posts already created.
    // datetime is assigned based upon time of post creation
    // newPost variable is declared as an object with four key/value pairs
    // Try to access '/posts' data in server and add 'newPost'
    // 'allPosts' variable is delcared with the spread operator filling in all current posts
    // and adding the 'newPost', represented as 'response.data', to the end.
    // Set state using 'setPosts'
    // Wipe 'postTitle' and 'postBody' with 'setPostTitle' and 'setPostBody'.
    // If an error is caught then log that error to console.
    const createPost = async (e) => {
        e.preventDefault()
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1
        console.log(`Posts length: ${posts.length} - Id: ${id}`)
        const datetime = format(new Date(), 'MMMM dd yyyy pp')
        const newPost = { id, title: postTitle, datetime, body: postBody }
        try {
            const response = await api.post('/posts', newPost)
            const allPosts = [...posts, response.data]
            setPosts(allPosts)
            setPostTitle('')
            setPostBody('')
            navigate('/')
        } catch(err) {
            console.log(`Error: ${err}`)
        }
    }

    // Pulls posts in from server and updates state to display them when page loads
    // Or the (R)ead portion of CRUD
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

    const updatePost = async (id) => {
        const datetime = format(new Date(), 'MMMM dd yyyy pp')
        const updatedPost = { id, title: editTitle, datetime, body: editBody }
        try {
            const response = await api.put(`/posts/${id}`, updatedPost)
            setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
            setEditTitle('')
            setEditBody('')
        } catch(err) {
            console.log(err)
        } finally {
            navigate('/')
        }
    }

    const deletePost = async (id) => {
        try {
            await api.delete(`/posts/${id}`)
            setPosts(posts.filter((post) => post.id !== id))
            navigate('/')
        } catch(err) {
            console.log(err.message)
        }
    }

    // Updates list of posts depending on what the user types into search bar
    // Filter the posts data and for each postconvert it to lowercase and check to see if the
    // 'postBody' or 'postTitle' matches what is being entered into the search bar.
    // setSearchResults with 'filteredResults' and then reverse them.
    useEffect(() => {
        const filteredResults = posts.filter((post) => 
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase()))

        setSearchResults(filteredResults.reverse())
    }, [posts, search])

    
    return (
        <DataContext.Provider value={{
            posts, setPosts, search, setSearch, searchResults, setSearchResults,
            postTitle, setPostTitle, postBody, setPostBody, createPost, deletePost,
            updatePost, editTitle, setEditTitle, editBody, setEditBody,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext