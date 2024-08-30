import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Services.css";
import ConsultancySection from "../ConsultancySection";
import ServicesData from "../ServiceData/ServiceData";
import basiccleaning from "../../Assets/img/basiccleaning.webp";

const Basiccleaning = () => {
  return (
    <>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Basic Cleaning</h2>
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
              <img src={basiccleaning} alt="" />
              <h2>
                <span>Basic Cleaning</span> - Efficient and Reliable Clean
              </h2>

              <b>
                Our basic cleaning service is designed for regular upkeep,
                providing consistent cleanliness for your space. Four
                fundamental steps in our basic cleaning process include:
              </b>
              <ol>
                <li>
                  <b>Scheduled Maintenance:</b> We establish regular cleaning
                  schedules, ensuring your space remains tidy and presentable on
                  an ongoing basis.
                </li>
                <li>
                  <b>Surface Cleaning :</b>Our team focuses on wiping, dusting,
                  and vacuuming to maintain a clean and welcoming environment.
                </li>
                <li>
                  <b>Competitive Pricing:</b>We offer affordable rates for this
                  essential yet effective cleaning service.
                </li>
                <li>
                  <b>Customer-Centric Approach: </b>Our commitment to meeting
                  your basic cleaning needs ensures that your space is always
                  ready for use.
                </li>
              </ol>

              <a href="/contact-us">
                <button className="booknow">Book Now</button>{" "}
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

export default Basiccleaning;
