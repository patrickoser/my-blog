import { useState } from "react"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleContactSubmit = (e) => {
        e.preventDefault()

        // Set up backend to handle the users contact information
    }

    return(
        <main>
            <h1>Contact</h1>
            <form onSubmit={handleContactSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea 
                    name="message" 
                    id="Your message" 
                    cols="30" 
                    rows="10" 
                />
            </form>
        </main>
    )
}

export default Contact