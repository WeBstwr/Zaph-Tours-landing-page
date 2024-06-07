import Banner from "../../components/Banner/Banner"


const About = () =>{
    return(
        <>
        <Banner
        mainText="about us"
        />
        <div className="about-section">
        <div className="about-text-box">
          <h3>learn more about us</h3>
          <div className="about-main-text">
            <h4>mission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem repellat sed earum iure doloremque quod optio velit
              cum, officiis totam. Perferendis natus incidunt quam, dolore totam
              provident illo accusantium dignissimos.
            </p>
            <h4>vision</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, molestiae explicabo dolore sunt ad ducimus est vitae
              sint atque soluta inventore fugit officiis reprehenderit iste!
            </p>
          </div>
          {/* <aboutIcons icon={} /> */}
        </div>
      </div>

      </>
    )
}

export default About