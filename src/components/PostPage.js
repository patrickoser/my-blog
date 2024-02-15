import { useContext } from "react"
import DataContext from '../context/DataContext'
import { Link, useParams } from "react-router-dom"

const PostPage = () => {
    const { posts, deletePost } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    return (
        <main>
            <div className="post">
                {
                    <>
                        <h1>{post.title}</h1>
                        <p>{post.datetime}</p>
                        <p>{post.body}</p>
                        <button onClick={() => deletePost(post.id)}>Delete</button>
                        <Link to={`/edit/${post.id}`}><button>Edit</button></Link>
                    </>
                }
            </div>
        </main>
    )
}

export default PostPage