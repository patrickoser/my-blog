import { Link } from 'react-router-dom'

// Post takes post as a parameter 
const Post = ({ post }) => {
    return (
        <div className="post">
            <Link to={`/post/${post.id}`}>
                <h2><span className='postTitle'>{post.title}</span></h2>
                <p className='postDate'>{post.datetime}</p>
            </Link>
            <p className='postBody'>{
                (post.body).length <= 25
                ? post.body
                : `${(post.body).slice(0, 25)}...`
            }</p>
        </div>
    )
}

export default Post