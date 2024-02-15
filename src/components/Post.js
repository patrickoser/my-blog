import { Link } from 'react-router-dom'

// Post takes post as a parameter 
const Post = ({ post }) => {
    return (
        <main>
            <Link to={`/post/${post.id}`}>
                <h2><span>{post.title}</span></h2>
                <p>{post.datetime}</p>
            </Link>
            <p>{
                (post.body).length <= 25
                ? post.body
                : `${(post.body).slice(0, 50)}...`
            }</p>
        </main>
    )
}

export default Post