import React from 'react'
import '../../styles/Contact.css'

function Contact() {
  return (
    <section className="hero login-bg">
        <div className="contact-container post-job-form">
            <form action="https://formspree.io/f/mqkoovwp" className="form-bg" method="POST">
                <div className="title">
                    <h2 className="has-text-white is-underlined">Contact Form</h2>
                </div>

                <div className="field">
                    <label htmlFor="Name">Name: </label>
                    <input className="input is-primary" id="name" name="name" type="text" placeholder=" Name" required/>
                </div>

                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input className="input is-primary" id="email" name="email" type="email" placeholder="Email address"
                        required/>
                </div>

                <div className="field">
                    <label className="Subject">Message:</label>
                    <div className="control">
                        <textarea className="textarea" name="message" placeholder="Write Something" required></textarea>
                    </div>
                </div>

                <div className="field mt-6">
                    <button className="button is-info  is-fullwidth" type="submit" required>Send</button>
                </div>
            </form> 
            </div>
    </section>
  )
}

export default Contact;