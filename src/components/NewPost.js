import { useContext } from "react"
import DataContext from "../context/DataContext"

const NewPost = () => {

    const { createPost, postTitle, postBody, setPostTitle, setPostBody } = useContext(DataContext)
    return (
        <div className="NewPost">
            <form onSubmit={createPost}method="post">
                <label htmlFor="postTitle">Title</label>
                <input type="text" id="postTitle" value={postTitle} name="postTitle" onChange={setPostTitle} required />
                <label htmlFor="postBody">Body</label>
                <input type="text" id="postBody" value={postBody} name="postBody" onChange={setPostBody} required />
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default NewPost