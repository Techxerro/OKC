import React from "react";
import { useState, useRef } from "react";
import "./About.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import emailjs from "emailjs-com";

const About = () => {
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
  return (
    <>
      <Header />
      <section className="aboutus thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">About Us</p>
              <h2 data-aos="fade-up">We turn house into homes</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="ourstory">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="d-flex story-img">
                <div className="d-flex" style={{ width: "50%" }}>
                  <img
                    src={require("../Assets/img/Rectangle 41.png")}
                    alt=""
                    width={"100%"}
                    data-aos="fade-down"
                    data-aos-delay="500"
                  />
                </div>
                <div
                  className="d-flex align-items-end"
                  style={{ width: "50%" }}
                >
                  <img
                    src={require("../Assets/img/Rectangle 28.png")}
                    alt=""
                    data-aos="fade-down"
                  />
                </div>
              </div>
              <div className="d-flex story-img">
                <div style={{ textAlign: "right", width: "50%" }}>
                  <img
                    src={require("../Assets/img/Rectangle 40.png")}
                    alt=""
                    data-aos="fade-up"
                    data-aos-delay="600"
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <img
                    src={require("../Assets/img/Rectangle 39.png")}
                    alt=""
                    data-aos="fade-up"
                    data-aos-delay="800"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-lg-5 col-md-12 col-sm-12 col-12  story-content">
              <div>
                <span data-aos="fade-down">Our Story</span>
                <h2 data-aos="fade-up" data-aos-delay="1000">
                  <span>We allow </span>you to spend time doing what you love.
                </h2>
                <p data-aos="fade-up" data-aos-delay="1000">
                  At OKC Uptown Cleaning, we understand that your time is
                  valuable. We believe that everyone deserves to spend their
                  precious moments doing the things they love, rather than
                  worrying about cleaning chores. That's why we're here to take
                  care of your cleaning needs, so you can focus on what truly
                  matters to you.
                </p>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </section>
      <section className="note">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <h2 data-aos="fade-up">
                A Note From <span>Jaynee Scott</span>
              </h2>
              <p data-aos="fade-up">
                Hello, I'm Jaynee Scott, the founder of OKC Uptown Cleaning. As
                a former full-time employee at a small construction company, I
                always had a passion for cleanliness and organization. During my
                time at OSU/OCCC, where I was majoring in construction
                management, I realized that I wanted to combine my skills and
                interests to create something meaningful. That's when I decided
                to start OKC Uptown Cleaning.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <img
                data-aos="fade-left"
                src={require("../Assets/img/image 9.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container our-mission">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <img
              data-aos="fade-right"
              src={require("../Assets/img/Rectangle18.png")}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
            <div>
              <h2 data-aos="fade-down">
                <span>Our </span>Mission
              </h2>
              <p data-aos="fade-up">
                Our mission at OKC Uptown Cleaning is to provide exceptional
                cleaning services that go beyond the surface. We strive to
                create a clean and healthy environment for our clients, ensuring
                their spaces are not only visually appealing but also free from
                harmful germs and allergens. We are dedicated to delivering
                top-quality results that exceed expectations, leaving our
                clients with peace of mind and more time for the things they
                love.
              </p>
            </div>
          </div>
        </div>
      </div>

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
                  Book Now
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
};

export default About;
