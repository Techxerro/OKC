import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Services.css";
import ConsultancySection from "../ConsultancySection";
import ServicesData from "../ServiceData/ServiceData";
import remodelcleaning from "../../Assets/img/remodelcleaning.jpeg";

const RemodelCleaning = () => {
  return (
    <>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Remodel Clean up</h2>
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
                  <button className="booknow">Book Now</button>
                </a>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-12 col-12 tab-content">
              <img src={remodelcleaning} alt="" />
              <h2>
                <span>Remodel clean up</span> - Post-Renovation Cleaning Made
                Easy
              </h2>

              <b>
                Our remodel clean-up service takes the hassle out of cleaning up
                after construction or renovations. Four essential steps in our
                remodel clean-up process include:
              </b>

              <ol>
                <li>
                  <b>Construction Debris Removal:</b>We start by clearing away
                  construction dust, debris, and materials left behind after the
                  renovation.
                </li>
                <li>
                  <b>Thorough Cleaning :</b>Our team performs a detailed
                  cleaning to restore your space to its pre-renovation
                  condition.
                </li>
                <li>
                  <b>Flexible Scheduling:</b>We accommodate your project
                  timelines to ensure a clean and safe environment.
                </li>
                <li>
                  <b>Skilled Team: </b>Our experienced team is equipped to
                  handle the unique challenges of post-renovation cleaning,
                  ensuring a pristine space.
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

export default RemodelCleaning;
