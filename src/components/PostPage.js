import { useContext } from "react"
import DataContext from '../context/DataContext'
import { useParams } from "react-router-dom"

const PostPage = () => {
    const { posts } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)
    
    return (
        <div className="PostPage">
            
        </div>
    )
}

export default PostPage