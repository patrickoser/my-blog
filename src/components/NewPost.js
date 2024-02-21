import { useContext } from "react"
import DataContext from "../context/DataContext"

const NewPost = () => {
    const { createPost, postTitle, postBody, setPostTitle, setPostBody } = useContext(DataContext)

    return (
        <div className="container">
            <article>
                <h2>New Post</h2>
                <form onSubmit={createPost}>
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
                    <textarea 
                        type="text" 
                        id="postBody" 
                        value={postBody} 
                        name="postBody" 
                        cols={30}
                        rows={10}
                        onChange={(e) => setPostBody(e.target.value)} 
                        required 
                    />
                    <button type="submit">Submit</button>
                </form>
            </article>
        </div>
    )
}

export default NewPost