import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Services.css";
import ConsultancySection from "../ConsultancySection";
import ServicesData from "../ServiceData/ServiceData";
import powerwashing from "../../Assets/img/powerwashing.jpg";

const Powerwashing = () => {
  return (
    <>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Power washing</h2>
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
              <img src={powerwashing} alt="" />
              <h2>
                <span>Power Washing</span> -Revitalize Your Exterior
              </h2>
              <b>
                Our power washing service renews the appearance of your
                property's exterior surfaces. Four essential steps in our power
                washing process include:
              </b>
              <ol>
                <li>
                  <b> Surface Assessment:</b> We inspect the surfaces to be
                  cleaned, identifying problem areas and specific cleaning
                  requirements.
                </li>
                <li>
                  <b> High-Pressure Cleaning:</b> We employ high-pressure water
                  jets to effectively remove dirt, grime, and stains from
                  various surfaces.
                </li>
                <li>
                  <b> Environmentally Friendly Practices: </b>Our cleaning
                  solutions and techniques are eco-friendly, protecting both
                  your property and the environment.
                </li>
                <li>
                  <b> Instant Curb Appeal: </b>Experience an immediate
                  enhancement in your property's appearance with our thorough
                  power wash
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

export default Powerwashing;
