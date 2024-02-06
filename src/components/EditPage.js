import { useContext } from "react"
import DataContext from "../context/DataContext"

const EditPage = () => {
    const { updatePost, editTitle, editBody, setEditBody, setEditTitle } = useContext(DataContext)

    return (
        <main className="EditPost">
            <form className="editForm" onSubmit={updatePost}>
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