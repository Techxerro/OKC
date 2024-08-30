import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./Pricing.css";
import pricingQuote from "../Assets/img/pricingQuote.png";
import bg from "../Assets/img/Ellipse 14.png";
import parse from "html-react-parser";

function Pricing() {
  const [openPopup, setopenPopup] = useState(false);
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_mgh9zss",
        "template_c964zir",
        form.current,
        "Dn6ucPwCcl8RRCE9b"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your mail has been sent successfully");
          window.location.reload(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const cardsData = [
    {
      title: "Basic Residential Cleaning",
      charge: "$40-$45/ hour",
      content: `Our Basic Residential Cleaning service is perfect for one-time or occasional cleaning needs. Priced at $40-$45 per hour, this service involves cleaning tasks such as:
    <ul>
      <li>Top surface cleansing</li>
      <li>Floor cleaning</li>
      <li>Bathroom and kitchen wipe-downs</li>
    </ul>
   
    For a home of 1,000 square feet, this usually takes 2 to 3 hours. For larger homes, you can expect about 30 minutes more for every additional 500 square feet.`,
    },
    {
      title: "Deep Cleaning  Residential",
      charge: "$50-$60/ hour",
      content: `For a more thorough cleaning, our Deep Cleaning service is an ideal choice. Priced at $50-$60 per hour per cleaning specialist, this service goes beyond the basics to ensure every nook and cranny is spotless. This service involves:
        <ul>
          <li>Precise hand cleaning of baseboards, appliances, and dusting</li>
          <li>Cleaning of Light fixtures and ceiling fans</li>
          <li>Elaborate floor cleaning  mopping and vacuuming</li>   
         </ul>
We understand that every home is unique, so we offer customizable options to fit your specific needs and budget.`,
    },
    {
      title: "Commercial Cleaning- Deep Cleaning",
      charge: "$0.35 - $0.75/ sq ft",
      content:
        "Our Commercial Cleaning service offers thorough and efficient cleaning for business spaces. Pricing for deep cleaning commercial spaces ranges from $0.35 to $0.75 per square foot, which depends on the specific requirements of that area. For example: <ul> <li> A 1,000-square-foot commercial space would cost anywhere between $350 and $750.</li> </ul> Whether you need a one-time deep cleaning service or regular maintenance, we tailor our services to keep your work environment clean and professional.",
    },
  ];
  return (
    <>
      <Header />
      <section className="ethicalbgg thumbnail ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Pricing Page</p>
              <h2 data-aos="fade-up">Here are the Pricing for our Services</h2>
              <h5 data-aos="fade-up" className="header-data">
                At OKC Uptown Cleaning, our services are meticulously designed
                to cater to both residential and commercial clients with a focus
                on quality and affordability. Below, you will find detailed
                information on our pricing structure for various cleaning
                services.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-4">
        <div className="row ">
          {cardsData.map((card, index) => (
            <div key={index} className="cardContainer col-12 col-md-4 mb-4">
              <div
                className="card h-100 card-hover-effect"
                data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
                data-aos-duration="3000"
              >
                <div className="card-header1 text-white">
                  <img src={bg} alt="Description of image" class="card-image" />
                  <div className="text-overlay">
                    <h4>{card.title}</h4>
                    <h4 style={{ fontWeight: 700, marginTop: "15px" }}>
                      {card.charge}
                    </h4>
                  </div>
                  {/* <h4>{card.title}</h4>
                  <h4>{card.charge}</h4> */}
                </div>
                <div className="card-body">
                  <div className="card-text">{parse(card.content)}</div>
                  {/* <h6 className="card-text">{card.content}</h6> */}
                </div>
                <div
                  className=" d-flex  justify-content-center"
                  onClick={() => setopenPopup(!openPopup)}
                >
                  <button className="booknow ">
                    <h5>BOOK NOW</h5>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="pad100 text-center bggreen">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 text-center">
              <h2 data-aos="fade-down">
                <span className="colorgreen">Customizable Options</span>
              </h2>
              <p data-aos="fade-up">
                At OKC Uptown Cleaning, we believe in flexibility and
                customization. If you have specific cleaning requirements or
                budget constraints, we are more than happy to work with you to
                create a cleaning plan that meets your needs without
                compromising on quality.
              </p>

              <div
                className="d-flex justify-content-center"
                onClick={() => setopenPopup(!openPopup)}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center pb-5">
              <h2 data-aos="fade-down">
                <span className="colorgreen">Get</span> a Quote
              </h2>
              <h2 data-aos="fade-up"> </h2>
              <p data-aos="fade-up">
                Ready to experience the best in cleaning services? Contact us
                today to get a personalized quote and schedule your cleaning.
                Our friendly and professional team is here to help make your
                home or office sparkle!
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div
                className=" col-lg-12 col-md-12 col-sm-12 col-12"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <img src={pricingQuote} alt="" className="quoteImg" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              <form ref={form} onSubmit={sendEmail} id="booking">
                <div className="d-flex" style={{ gap: "20px" }}>
                  <label>
                    <span>First name</span>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Mark"
                      required
                    />
                  </label>
                  <label>
                    <span>Last name </span>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Juckerberg"
                      required
                    />
                  </label>
                </div>
                <label>
                  <span>Email</span>
                  <input
                    type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </label>
                <label>
                  <span>Phone Number</span>
                  <input
                    type="text"
                    name="phone"
                    placeholder="0987654321"
                    required
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={"4"}
                    placeholder="Tell us what we can help you with"
                    required
                  />
                </label>
                <input type="submit" value="Get Free Consultancy" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="pad100 text-center bggreen">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 text-center">
              <h2 data-aos="fade-down">
                <span className="colorgreen">Want</span> to experience the
                difference?
              </h2>
              <p data-aos="fade-up">
                Click the button below to book your cleaning service now and let
                us take care of the rest.
              </p>

              <div
                className="d-flex justify-content-center"
                onClick={() => setopenPopup(!openPopup)}
              >
                <button className="booknow" data-aos="fade-up">
                  Book Now{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="popupoverlay"
        style={{ display: openPopup ? "block" : "none" }}
        onClick={() => setopenPopup(!openPopup)}
      ></div>
      <div className="popup" style={{ display: openPopup ? "block" : "none" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Request a free estimate </h2>
          <svg
            width="16"
            height="16"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginBottom: "8px", cursor: "pointer" }}
            onClick={() => setopenPopup(!openPopup)}
          >
            <path d="M1 1L33 33" stroke="black" stroke-width="2" />
            <path d="M33 1L0.999998 33" stroke="black" stroke-width="2" />
          </svg>
        </div>
        <p>Enter your information below, and we will be in touch soon</p>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            <input type="text" name="name" placeholder="Name" required />
          </label>
          <label>
            <input type="email" name="email" placeholder="Email" required />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
