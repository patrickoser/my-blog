import { useContext } from "react"
import { useParams } from "react-router-dom"
import DataContext from "../context/DataContext"

const EditPage = () => {
    const { updatePost, editTitle, editBody, setEditBody, setEditTitle, posts } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    return (
        <main className="container">
            <article>
                <h3>Edit Post</h3>
                <form onSubmit={(e) => e.preventDefault()}>
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
                        rows={10}
                        cols={30}
                        onChange={(e) => setEditBody(e.target.value)} 
                        required 
                    />
                    <button type="submit" onClick={() => updatePost(post.id)}>Submit</button>
                </form>
            </article>
        </main>
    )
}

export default EditPage