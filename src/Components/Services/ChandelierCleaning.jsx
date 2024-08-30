import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Services.css";
import ConsultancySection from "../ConsultancySection";
import ServicesData from "../ServiceData/ServiceData";
import chandeliercleaning from "../../Assets/img/chandeliercleaning.jpg";

const ChandelierCleaning = () => {
  return (
    <>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Chandelier Cleaning</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="servicetab-section" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div className="tab-contain">
                <h3>Categories</h3>
                {ServicesData.map((tab, index) => (
                  <div className="tab" key={index}>
                    <a href={tab.link}>{tab.head}</a>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 0.5L6 5.5L1 10.5" stroke="black" />
                      <path d="M1 0.5L6 5.5L1 10.5" stroke="black" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="greenbox" data-aos="fade-down">
                <h3>
                  Keep everything <br />
                  clean with us
                </h3>
                <a href="/contact-us">
                  <button className="booknow"> Book Now</button>
                </a>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-12 col-12 tab-content">
              <img src={chandeliercleaning} alt="" />
              <h2>
                <span>Chandeliers Cleaning</span> -Illuminate Your Space with
                Clarity
              </h2>

              <b>
                Our chandelier cleaning service is dedicated to ensuring your
                lighting fixtures shine brightly. Four essential steps in our
                chandelier cleaning process include:
              </b>

              <ol>
                <li>
                  <b>Careful Inspection: </b>We begin with a close inspection of
                  your chandeliers to assess their condition and cleaning
                  requirements
                </li>
                <li>
                  <b>Gentle Cleaning:</b> Our specialized team uses gentle yet
                  effective cleaning methods to preserve the beauty and
                  integrity of your chandeliers.
                </li>
                <li>
                  <b>Streak-Free Shine: </b>We guarantee the removal of dust and
                  smudges for crystal-clear brilliance.
                </li>
                <li>
                  <b>Customized Cleaning Plans:</b> Our solutions are tailored
                  to meet the unique requirements of your lighting fixtures,
                  ensuring stunning results.
                </li>
              </ol>
              <a href="/contact-us">
                <button className="booknow">Book Now</button>
              </a>
            </div>
          </div>
        </div>

        <div className="greenbox greenbox-visible-mobile" data-aos="fade-down">
          <h3>
            Keep everything <br />
            clean with us
          </h3>
          <a href="/contact-us">
            <button className="booknow">Book Now</button>
          </a>
        </div>
      </section>

      <ConsultancySection />

      <Footer />
    </>
  );
};

export default ChandelierCleaning;
