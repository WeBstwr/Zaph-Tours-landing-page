import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import "./contact.css";

const Socials = ({ icon, label }) => {
  return (
    <div className="social-media-part">
      <div className="social-icon-wrapper">{icon}</div>
      {label}
    </div>
  );
};

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
            <p>
              <b>email: </b>zaphtours@info.com
            </p>
            <p>
              <b>contact: </b>0221565274
            </p>
            <p>
              <b>address: </b>zaph tours, along enterprise road in nairobi kenya
            </p>
          </div>
          <div className="contact-form-section">
            <form className="contact-form">
              <h2>register</h2>
              <div className="contact-form-grp">
                <label htmlFor="name">name:</label>
                <input
                  type="text"
                  id="name"
                  className="contact-form-input"
                  placeholder="enter your name"
                />
              </div>
              <div className="contact-form-grp">
                <label htmlFor="email">email:</label>
                <input
                  type="text"
                  id="email"
                  className="contact-form-input"
                  placeholder="enter email address"
                />
              </div>
              <div className="contact-form-grp">
                <label htmlFor="name">message:</label>
                <textarea
                  id="message"
                  placeholder="message"
                  className="message-text-area"
                ></textarea>
              </div>
              <button>submit</button>
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
            <h2>open hours</h2>
            <p>
              {" "}
              <b>monday - friday: </b>8am - 5pm
            </p>
            <p>
              {" "}
              <b>saturday: </b>9am - 2pm
            </p>
            <p>
              {" "}
              <b>sunday: </b>closed
            </p>
          </div>
        </div>

        <div className="social-media">
          <h2>follow us</h2>
          <div className="contact-social">
            <socials />
          </div>
          <div className="social-media-icons">
            <Socials icon={<FaFacebook />} label={"zaphTour"} />
            <Socials icon={<AiFillInstagram />} label={"zaphTour"} />
            <Socials icon={<FaXTwitter />} label={"zaphTour"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
