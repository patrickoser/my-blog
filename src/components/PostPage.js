import { useContext } from "react"
import DataContext from '../context/DataContext'
import { Link, useParams } from "react-router-dom"

const PostPage = () => {
    const { posts, deletePost } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    return (
        <main className="container" id="PostPage">
            <article>
                <hgroup>
                    <h1 style={{marginBottom: ".25rem"}}>{post.title}</h1>
                    <h2>{post.datetime}</h2>
                </hgroup>
                <section>
                    <p>{post.body}</p>
                </section>
                <button onClick={() => deletePost(post.id)} className="deleteBtn">Delete</button>
                <Link to={`/edit/${post.id}`}><button className="editBtn">Edit</button></Link>
            </article>
        </main>
    )
}

export default PostPage