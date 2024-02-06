import { useContext } from "react"
import { useParams } from "react-router-dom"
import DataContext from "../context/DataContext"

const EditPage = () => {
    const { updatePost, editTitle, editBody, setEditBody, setEditTitle, posts } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    return (
        <main className="EditPage">
            <form className="editForm" onSubmit={() => updatePost(post.id)}>
                <label htmlFor="editTitle">Title</label>
                <input 
                    type="text" 
                    id="editTitle" 
                    value={editTitle} 
                    name="editTitle" 
                    onChange={(e) => setEditTitle(e.target.value)} 
                    required 
                />
                <label htmlFor="editBody">Body</label>
                <textarea 
                    type="text" 
                    id="editBody" 
                    value={editBody} 
                    name="editBody" 
                    onChange={(e) => setEditBody(e.target.value)} 
                    required 
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default EditPage