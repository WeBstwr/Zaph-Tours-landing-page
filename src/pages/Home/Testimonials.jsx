import Banner from "../../components/Banner/Banner";
import owen from "../../assets/owen.jpg";
import lucy from "../../assets/lucy.jpg";
import james from "../../assets/james.jpg";

const Testimonials = () => {
  return (
    <>
      <Banner mainText="testimonials" />

      <div className="testimonials-section">
        <div className="testimonial-container">
          <div className="testimonial-image">
            <img src={owen} alt="Owen" />
          </div>
          <div className="testimonial-text-box">
            <h3>owen bazu</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
              repellendus nulla aspernatur suscipit consequuntur nesciunt
              dolorum explicabo, deserunt omnis ea voluptatum eius nihil
              asperiores..
            </p>
          </div>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-image">
            <img src={lucy} alt="lucy" />
          </div>
          <div className="testimonial-text-box">
            <h3>lucy kerr</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
              repellendus nulla aspernatur suscipit consequuntur nesciunt
              dolorum explicabo, deserunt omnis ea voluptatum eius nihil
              asperiores..
            </p>
          </div>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-image">
            <img src={james} alt="james" />
          </div>
          <div className="testimonial-text-box">
            <h3>reece james</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
              repellendus nulla aspernatur suscipit consequuntur nesciunt
              dolorum explicabo, deserunt omnis ea voluptatum eius nihil
              asperiores..
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
