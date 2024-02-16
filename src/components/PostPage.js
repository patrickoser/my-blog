import { useContext } from "react"
import DataContext from '../context/DataContext'
import { Link, useParams } from "react-router-dom"

const PostPage = () => {
    const { posts, deletePost } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    return (
        <main className="container">
            {
                <article>
                    <hgroup>
                        <h1>{post.title}</h1>
                        <h2>{post.datetime}</h2>
                    </hgroup>
                    <p>{post.body}</p>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                    <Link to={`/edit/${post.id}`}><button>Edit</button></Link>
                </article>
            }
        </main>
    )
}

export default PostPage