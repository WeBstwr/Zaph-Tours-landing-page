import Banner from "../../components/Banner/Banner";
import React from "react";

const Newsletter = () => {
  return (
    <>
      <Banner mainText="stay connected" />

      <section className="newsletter-section">
        <h2>get the latest updates</h2>
        <p>
          Subscribe to our newsletter to stay up to date with our latest news,
          promotions and products.
        </p>
        <form className="newsletter-form">
          <div className="newsletter-form-grp">
            <label htmlFor="email">email:</label>
            <input
              type="text"
              id="email"
              className="newsletter-form-input"
              placeholder="enter your email"
            />
          </div>
          <button>subscribe</button>
        </form>
      </section>
    </>
  );
};

export default Newsletter;
