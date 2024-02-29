import { Link } from 'react-router-dom'

// Post takes post as a parameter 
const Post = ({ post }) => {
    return (
        <article className='Post'>
            <Link to={`/post/${post.id}`}>
                <hgroup>
                    <h3  style={{marginBottom: ".25rem"}}>{post.title}</h3>
                    <h5>{post.datetime}</h5>
                </hgroup>
            </Link>
            <p>{
                (post.body).length <= 100
                ? post.body
                : `${(post.body).slice(0, 100)}...`
            }</p>
        </article>
    )
}

export default Post