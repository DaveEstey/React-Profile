import React from 'react'
function Contact() {
  
 const sendEmail = () => {
    window.Email.send({
        SecureToken: "d1bf38d0-43bc-48a7-9d37-dd517df723fa",
        To: 'daveestey.working@gmail.com',
        From: document.getElementById('email').value,
        Subject: "New Contact",
        Body: "Name:" + document.getElementById('name').value
            + "<br> Message:" + document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}
  
  return (

    <section className="hero is-fullheight login-bg">
        <div className="container post-job-form">
            <form onSubmit={sendEmail} className="form-bg" method="POST">
                <div className="title">
                    <h2 className="has-text-white">Contact Form</h2>
                </div>

                <div className="field">
                    <label for="Name">Name</label>
                    <input className="input is-primary" id="name" name="name" type="text" placeholder=" Name" required/>
                </div>

                <div className="field">
                    <label for="email">Email</label>
                    <input className="input is-primary" id="email" name="email" type="email" placeholder="Email address"
                        required/>
                </div>

                <div className="field">
                    <label className="Subject">Message</label>
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
