import { useContext } from "react"
import DataContext from "../context/DataContext"

const NewPost = () => {

    const { createPost, postTitle, postBody, setPostTitle, setPostBody } = useContext(DataContext)
    return (
        <main className="NewPost">
            <form onSubmit={createPost}method="post">
                <label htmlFor="postTitle">Title</label>
                <input 
                    type="text" 
                    id="postTitle" 
                    value={postTitle} 
                    name="postTitle" 
                    onChange={(e) => setPostTitle(e.target.value)} 
                    required 
                />
                <label htmlFor="postBody">Body</label>
                <input 
                    type="text" 
                    id="postBody" 
                    value={postBody} 
                    name="postBody" 
                    onChange={(e) => setPostBody(e.target.value)} 
                    required 
                />
                <button type="submit"></button>
            </form>
        </main>
    )
}

export default NewPost