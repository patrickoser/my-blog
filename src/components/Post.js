import { Link } from 'react-router-dom'

// Post takes post as a parameter 
const Post = ({ post }) => {
    return (
        <article>
            <Link to={`/post/${post.id}`}>
                <hgroup>
                    <h2><span className='postTitle'>{post.title}</span></h2>
                    <h4>{post.datetime}</h4>
                </hgroup>
            </Link>
            <p>{
                (post.body).length <= 25
                ? post.body
                : `${(post.body).slice(0, 100)}...`
            }</p>
        </article>
    )
}

export default Post