import Banner from "../../components/Banner/Banner";
import mtKenya from "../../assets/mtKenya.jpg";

const Featured = () => {
  return (
    <>
      <Banner mainText="featured destinations" />
      <div className="featured-section">
        <div className="feature-container">
          <div className="feature-image">
            <img src={mtKenya} alt="" />
          </div>
          <div className="feature-text-box">
            <h3>mt. kenya</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos harum at fugiat modi!
            </p>
          </div>
        </div>
        <div className="feature-container">
          <div className="feature-image">
            <img src={mtKenya} alt="" />
          </div>
          <div className="feature-text-box">
            <h3>mt. ruwenzori</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos harum at fugiat modi!
            </p>
          </div>
        </div>
        <div className="feature-container">
          <div className="feature-image">
            <img src={mtKenya} alt="" />
          </div>
          <div className="feature-text-box">
            <h3>lake nakuru</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos harum at fugiat modi!
            </p>
          </div>
        </div>
        <div className="feature-container">
          <div className="feature-image">
            <img src={mtKenya} alt="" />
          </div>
          <div className="feature-text-box">
            <h3>tsavo national park</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos harum at fugiat modi!
            </p>
          </div>
        </div>
        <div className="feature-container">
          <div className="feature-image">
            <img src={mtKenya} alt="" />
          </div>
          <div className="feature-text-box">
            <h3>nairobi national park</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos harum at fugiat modi!
            </p>
          </div>
        </div>
        <div className="feature-container">
          <div className="feature-image">
            <img src={mtKenya} alt="" />
          </div>
          <div className="feature-text-box">
            <h3>coastal kenya</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos harum at fugiat modi!
            </p>
          </div>
        </div>
        <div className="discover-more">
          <button>Discover More</button>
        </div>
      </div>
    </>
  );
};

export default Featured;
