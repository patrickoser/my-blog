import { useContext } from "react"
import DataContext from '../context/DataContext'
import { useParams } from "react-router-dom"
import 

const PostPage = () => {
    const { posts, deletePost } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    return (
        <div className="PostPage">
            <div className="post">
                {
                    <>
                        <h1>{post.title}</h1>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button onClick={deletePost}>Delete</button>
                    </>
                }
            </div>
        </div>
    )
}

export default PostPage