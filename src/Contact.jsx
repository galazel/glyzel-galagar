
import Loading from "./Loading"
import {useState} from "react";
import ContactSuccess from "./ContactSuccess";
function Contact() 
{
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    setLoading(true);
    const lol = await fetch("http://localhost:8080/contact/send", {
      method: "POST",
      body: form,
    }).then((response) => {
      setLoading(false);
      if (response.ok) {
        setSuccess(true)
        event.target.reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    }).catch((error) => {
      setLoading(false);
      console.error("Error sending message:", error);
      alert("An error occurred while sending your message. Please try again later.");
    });     
  }
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>Feel free to message me if you want a website for your business</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="form-row">
            <div className="form-group half-width">
              <input
                name="firstName"
                type="text"
                id="firstName"
                placeholder="First name"
                required
              />
            </div>
            <div className="form-group half-width">
              <input
                name="lastName"
                type="text"
                id="lastName"
                placeholder="Last name"
                required
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="form-row">
            <div className="form-group half-width">
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group half-width">
              <input
                name="phoneNumber"
                type="tel"
                id="phone"
                placeholder="Phone number"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="form-group full-width">
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here..."
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-group full-width">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
          {/* Loading Spinner */}
          {
            loading ? <Loading />: null 
          }
          {success && <ContactSuccess onClose={() => setSuccess(false)} />}


        </form>
      </div>
    </section>
  );
}

export default Contact;
