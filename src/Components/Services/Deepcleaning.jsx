import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Services.css";
import ConsultancySection from "../ConsultancySection";
import ServicesData from "../ServiceData/ServiceData";
import Deepcleaningimg from "../../Assets/img/Rectangle 44.png";

const Deepcleaning = () => {
  return (
    <>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Deep Cleaning</h2>
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
              <img src={Deepcleaningimg} alt="" />
              <h2>
                <span>Deep Cleaning</span> - Experience the Ultimate Clean
              </h2>

              <h3>
                <span>Our deep cleaning </span>service goes beyond the surface,
                providing a comprehensive solution for a deeply sanitized space.
              </h3>
              <b>Four essential steps in our deep cleaning process include:</b>

              <ol>
                <li>
                  <b>Assessment and Planning:</b> We begin by assessing your
                  space to understand your specific needs, and creating a
                  customized cleaning plan.
                </li>
                <li>
                  <b>Thorough Cleaning and Sanitization:</b> Our team
                  meticulously cleans and sanitizes high-touch areas,
                  eliminating germs and bacteria to ensure a healthier
                  environment.
                </li>
                <li>
                  <b>Detail-Oriented Cleaning:</b> We pay close attention to
                  often overlooked areas, leaving no trace of dust, grime, or
                  debris behind.
                </li>
                <li>
                  <b>Eco-Friendly Approach: </b> We use environmentally friendly
                  cleaning products and methods to ensure both the health of
                  your space and the planet.
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

export default Deepcleaning;
