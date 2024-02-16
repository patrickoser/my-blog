const Contact = () => {

    return(
        <main className="container">
            <section>
                <article>
                    <h1>Need to get in touch?</h1>
                    <p><b>Name: </b>Patrick Oser</p>
                    <p><b>Email: </b>patrick.oser1@gmail.com</p>
                    <p><b>Github: </b><a href="https://github.com/patrickoser">https://github.com/patrickoser</a></p>
                    <p><b>LinkedIn: </b><a href="https://www.linkedin.com/in/patrick-oser-841648260/">https://www.linkedin.com/in/patrick-oser-841648260/</a></p>
                </article>
            </section>
            <section>
                <article>
                    <form target="_blank" action="https://formsubmit.co/0468385d2fc2c9897f3f7936e51b7e3c" method="POST" className="contactForm">
                        <label>Name</label>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                        />
                        <label>Email</label>
                        <input 
                            type="text"
                            name="email"
                            placeholder="Your email"
                            required
                        />
                        <label>Message</label>
                        <textarea 
                            type="textarea"
                            name="message" 
                            id="message"
                            placeholder="Your message"
                            cols="30" 
                            rows="10" 
                            required
                        />
                        <input type="hidden" name="_captcha" value={false} />
                        <button type="submit">Send</button>
                    </form>
                </article>
            </section>
        </main>
    )
}

export default Contact