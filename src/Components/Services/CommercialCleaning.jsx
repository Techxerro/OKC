import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Services.css";
import ConsultancySection from "../ConsultancySection";
import ServicesData from "../ServiceData/ServiceData";
import commercialcleaning from "../../Assets/img/commercialcleaning.jpg";

const Commercialcleaning = () => {
  return (
    <>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Commercial Carpet Cleaning</h2>
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
              <img src={commercialcleaning} alt="" />
              <h2>
                <span>Commercial Cleaning</span> - Elevate Your Business
                Environment
              </h2>

              <b>
                Our commercial cleaning service is tailored to meet the unique
                requirements of businesses. Four essential steps in our
                commercial cleaning process include:
              </b>

              <ol>
                <li>
                  <b>Initial Consultation:</b> We begin with a consultation to
                  understand your specific business cleaning needs and create a
                  customized plan.
                </li>
                <li>
                  <b>Flexible Scheduling :</b> We work around your business
                  hours to minimize disruptions, ensuring a clean and
                  professional image for your company.
                </li>
                <li>
                  <b>Experienced Team:</b>Our team is well-trained to understand
                  the specific demands of commercial spaces, delivering
                  top-quality results.
                </li>
                <li>
                  <b>Quality Assurance: </b>Our commitment to delivering
                  consistent, high-quality results creates a hygienic and
                  appealing atmosphere for your business.{" "}
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

export default Commercialcleaning;
