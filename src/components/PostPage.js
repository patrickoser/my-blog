import { useContext } from "react"
import DataContext from '../context/DataContext'

const PostPage = () => {
    const { posts } = useContext(DataContext)
    return (
        <div className="PostPage">
            
        </div>
    )
}

export default PostPage