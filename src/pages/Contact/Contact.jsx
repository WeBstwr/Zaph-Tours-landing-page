import "./contact.css";
import logo from "../../assets/logo.png";

const Contact = () => {
  return (
    <>
      <div className="contact-background">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-info">
          <div className="contacts">
            <h2>Get in Touch</h2>
          </div>
          <div className="contact-form-sectiom">
            <form className="contact-form">
              <div className="contact-form-grp">
                <label for="name">name:</label>
                <input
                  type="text"
                  id="name"
                  className="contact-form-input"
                  placeholder="enter your name"
                />
              </div>
              <div className="contact-form-grp">
                <label for="email">email:</label>
                <input
                  type="text"
                  id="email"
                  className="contact-form-input"
                  placeholder="enter email address"
                />
              </div>
              <div className="contact-form-grp">
                <label for="name">Name:</label>
                <textarea
                  id="message"
                  className="contact-form-input"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6708.300292238894!2d36.8176032918446!3d-1.3076741621547114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1717876071933!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
          <div className="open-hours">
            <h2>Open Hours</h2>
            <h2>Open Hours</h2>
            <h2>Open Hours</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
