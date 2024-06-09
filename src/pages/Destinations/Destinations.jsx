import "./destinations.css";
import diani from "../../assets/diani.jpg";
import wildbeast from "../../assets/wildbeast.jpg";
import falls from "../../assets/fourteenFalls.jpg";
import longonot from "../../assets/longonot.jpg";
import hells from "../../assets/hellsGate.jpg";
import tsavo from "../../assets/tsavo.jpg";

const Destinations = () => {
  return (
    <>
      <div className="destination-background">
        <div className="dest-bg-text">
          <h2>destinations</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            rerum iure inventore esse, ab officia!
          </p>
        </div>
      </div>

      <div className="destinations-section">
        <div className="destinations-container 1 (even)">
          <img src={diani} alt="diani" />
          <div className="destinations-text-box">
            <h3>diani, mombasa</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              laudantium!
            </p>

            <div className="destination-price">
              <p>
                <b>grp of 10: </b>$700
              </p>
              <p>
                <b>grp of 5: </b>$400
              </p>
              <p>
                <b>individual: </b>$100
              </p>
              <button>book</button>
            </div>
          </div>
        </div>

        <div className="destinations-container">
          <img src={wildbeast} alt="diani" />
          <div className="destinations-text-box">
            <h3>maasai mara, kenya</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              laudantium!
            </p>

            <div className="destination-price">
              <p>
                <b>grp of 10: </b>$700
              </p>
              <p>
                <b>grp of 5: </b>$400
              </p>
              <p>
                <b>individual: </b>$100
              </p>
              <button>book</button>
            </div>
          </div>
        </div>

        <div className="destinations-container">
          <img src={falls} alt="fourteen falls" />
          <div className="destinations-text-box">
            <h3>the fourteen falls</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              laudantium!
            </p>

            <div className="destination-price">
              <p>
                <b>grp of 10: </b>$700
              </p>
              <p>
                <b>grp of 5: </b>$400
              </p>
              <p>
                <b>individual: </b>$100
              </p>
              <button>book</button>
            </div>
          </div>
        </div>

        <div className="destinations-container">
          <img src={longonot} alt="Mt. longonot" />
          <div className="destinations-text-box">
            <h3>mount longonot</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              laudantium!
            </p>

            <div className="destination-price">
              <p>
                <b>grp of 10: </b>$700
              </p>
              <p>
                <b>grp of 5: </b>$400
              </p>
              <p>
                <b>individual: </b>$100
              </p>
              <button>book</button>
            </div>
          </div>
        </div>

        <div className="destinations-container">
          <img src={hells} alt="hells gate" />
          <div className="destinations-text-box">
            <h3>hells gate, nakuru</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              laudantium!
            </p>

            <div className="destination-price">
              <p>
                <b>grp of 10: </b>$700
              </p>
              <p>
                <b>grp of 5: </b>$400
              </p>
              <p>
                <b>individual: </b>$100
              </p>
              <button>book</button>
            </div>
          </div>
        </div>

        <div className="destinations-container">
          <img src={tsavo} alt="tsavo" />
          <div className="destinations-text-box">
            <h3>tsavo national park</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              laudantium!
            </p>

            <div className="destination-price">
              <p>
                <b>grp of 10: </b>$700
              </p>
              <p>
                <b>grp of 5: </b>$400
              </p>
              <p>
                <b>individual: </b>$100
              </p>
              <button>book</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
