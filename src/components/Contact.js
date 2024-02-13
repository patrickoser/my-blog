import { useState } from "react"

const Contact = () => {

    return(
        <main className="ContactPage">
            <h1>Need to get in touch?</h1>
            <p><b>Name: </b>Patrick Oser</p>
            <p><b>Email: </b>patrick.oser1@gmail.com</p>
            <p><b>Github: </b><a href="https://github.com/patrickoser">https://github.com/patrickoser</a></p>
            <p><b>LinkedIn: </b><a href="https://www.linkedin.com/in/patrick-oser-841648260/">https://www.linkedin.com/in/patrick-oser-841648260/</a></p>
            <form action="" className="contactForm">
                <label htmlFor="">Name</label>
                <input 
                    type="text"
                    name="name"
                    placeholder="Your name"
                />
                <label htmlFor="">Email</label>
                <input 
                    type="text"
                    name="email"
                    placeholder="Your email"
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