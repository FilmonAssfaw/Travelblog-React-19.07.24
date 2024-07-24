import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted:", { name, email, message });

    setName("");
    setEmail("");
    setMessage("");
    setFormSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> 432 Ice-Cold St., SnowTown, Antarctica
        </p>
        <p>
          <strong>Phone:</strong> +110/112/911
        </p>
        <p>
          <strong>Email:</strong> info@fili.com
        </p>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        {formSubmitted ? (
          <p>
            Thank you for your message. I will get back to you as soon as
            possible. Also check your spam folder. If not I make sure you get
            spammed the rest of your life
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
      <p>
        This was a project from the FullStack course at the Hamburg Coding
        School. Shout out to all my Teachers for helping me.
      </p>
    </div>
  );
}
