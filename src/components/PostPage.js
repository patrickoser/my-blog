import { useContext } from "react"
import DataContext from '../context/DataContext'
import { useParams } from "react-router-dom"

const PostPage = () => {
    const { posts, deletePost } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    return (
        <main className="PostPage">
            <div className="post">
                {
                    <>
                        <h1>{post.title}</h1>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button className="deleteBtn" onClick={() => deletePost(post.id)}>Delete</button>
                    </>
                }
            </div>
        </main>
    )
}

export default PostPage