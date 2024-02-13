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
        <main className="ContactPage">
            <h1>Need to get in touch?</h1>
            <p><b>Name: </b>Patrick Oser</p>
            <p><b>Email: </b>patrick.oser1@gmail.com</p>
            <p><b>Github: </b><a href="https://github.com/patrickoser">https://github.com/patrickoser</a></p>
            <p><b>LinkedIn: </b><a href="https://www.linkedin.com/in/patrick-oser-841648260/">https://www.linkedin.com/in/patrick-oser-841648260/</a></p>
            <form onSubmit={handleContactSubmit} className="contactForm">
                <label htmlFor="">Name</label>
                <input 
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <label htmlFor="">Email</label>
                <input 
                    type="text"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="">Message</label>
                <textarea 
                    type="textarea"
                    name="message" 
                    id="message"
                    placeholder="Your message"
                    cols="30" 
                    rows="10" 
                />
            </form>
        </main>
    )
}

export default Contact