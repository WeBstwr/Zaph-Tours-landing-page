import "./tripTypes.css";
import honeymoon from "../../assets/honeymoon.jpg";
import family from "../../assets/family.jpg";
import adventure from "../../assets/adventure.jpg";
import cultural from "../../assets/cultural.jpg";
import wildlife from "../../assets/wildlife.jpg";
import eco from "../../assets/eco.jpg";
import vacation from "../../assets/vacation.jpg";
import beach from "../../assets/beachH.jpg";
import wellnees from "../../assets/wellness.jpg";
import culnary from "../../assets/culnarry.jpg";

const TripTypes = () => {
  return (
    <>
      <div className="trip-background">
        <div className="trip-bg-text">
          <h2>trip types</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            rerum iure inventore esse, ab officia!
          </p>
        </div>
      </div>

      <section className="trip-types">
        <div className="trip-container">
          <div className="trip-title">
            <h3>honeymoon</h3>
          </div>
          <div className="trip-image">
            <img src={honeymoon} alt="Honeymoon" />
          </div>
          <div className="trip-text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              veniam.
            </p>
            <h4>$5000</h4>
            <button>book</button>
          </div>
        </div>

        <div className="trip-container">
          <div className="trip-title">
            <h3>family</h3>
          </div>
          <div className="trip-image">
            <img src={family} alt="family" />
          </div>
          <div className="trip-text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              veniam.
            </p>
            <h4>$4000</h4>
            <button>book</button>
          </div>
        </div>

        <div className="trip-container">
          <div className="trip-title">
            <h3>adventure</h3>
          </div>
          <div className="trip-image">
            <img src={adventure} alt="adventure" />
          </div>
          <div className="trip-text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              veniam.
            </p>
            <h4>$3000</h4>
            <button>book</button>
          </div>
        </div>

        <div className="trip-container">
          <div className="trip-title">
            <h3>cultural tours</h3>
          </div>
          <div className="trip-image">
            <img src={cultural} alt="cultural" />
          </div>
          <div className="trip-text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              veniam.
            </p>
            <h4>$4500</h4>
            <button>book</button>
          </div>
        </div>

        <div className="trip-container">
          <div className="trip-title">
            <h3>wildlife safaris</h3>
          </div>
          <div className="trip-image">
            <img src={wildlife} alt="wildlife" />
          </div>
          <div className="trip-text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              veniam.
            </p>
            <h4>$1000</h4>
            <button>book</button>
          </div>
        </div>

        <div className="trip-container">
          <div className="trip-title">
            <h3>eco-tours</h3>
          </div>
          <div className="trip-image">
            <img src={eco} alt="eco-tours" />
          </div>
          <div className="trip-text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              veniam.
            </p>
            <h4>$2000</h4>
            <button>book</button>
          </div>
        </div>

        <div className="trip-container">
          <div className="trip-title">
            <h3>luxury vacations</h3>
          </div>
          <div className="trip-image">
            <img src={vacation} alt="vacation" />
          </div>
          <div className="trip-text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              veniam.
            </p>
            <h4>$6000</h4>
            <button>book</button>
          </div>
        </div>

        <div className="trip-container">
          <div className="trip-title">
            <h3>beach holidays</h3>
          </div>
          <div className="trip-image">
            <img src={beach} alt="beach" />
          </div>
          <div className="trip-text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              veniam.
            </p>
            <h4>$900</h4>
            <button>book</button>
          </div>
        </div>

        <div className="trip-container">
          <div className="trip-title">
            <h3>wellness retreats</h3>
          </div>
          <div className="trip-image">
            <img src={wellnees} alt="wellness" />
          </div>
          <div className="trip-text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              veniam.
            </p>
            <h4>$1500</h4>
            <button>book</button>
          </div>
        </div>

        <div className="trip-container">
          <div className="trip-title">
            <h3>culnary vacations</h3>
          </div>
          <div className="trip-image">
            <img src={culnary} alt="culnarry" />
          </div>
          <div className="trip-text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              veniam.
            </p>
            <h4>$3000</h4>
            <button>book</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TripTypes;
