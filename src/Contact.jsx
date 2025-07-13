function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>Feel free to message me if you want a website for your business</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          {/* Name Fields */}
          <div className="form-row">
            <div className="form-group half-width">
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                required
              />
            </div>
            <div className="form-group half-width">
              <input
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
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group half-width">
              <input
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
        </form>
      </div>
    </section>
  );
}

export default Contact;
