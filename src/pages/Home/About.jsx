import Banner from "../../components/Banner/Banner";
import missionImage from "../../assets/mission.png";
import vission from "../../assets/vission.png";

const About = () => {
  return (
    <>
      <Banner mainText="about us" />
      <div className="about-section">
        <div className="about-title">
          <h3>learn more about us</h3>
        </div>
        <div className="about-container">
          <img src={missionImage} alt="mission image" />

          <div className="about-main-text">
            <h4>mission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem repellat sed earum iure doloremque quod optio velit
              cum, officiis totam. Perferendis natus incidunt quam, dolore totam
              provident illo accusantium dignissimos.
            </p>
          </div>
        </div>

        <div className="about-container">
          <div className="about-main-text">
            <h4>vission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem repellat sed earum iure doloremque quod optio velit
              cum, officiis totam. Perferendis natus incidunt quam, dolore totam
              provident illo accusantium dignissimos.
            </p>
          </div>
          <img src={vission} alt="mission image" />
        </div>
      </div>
    </>
  );
};

export default About;
