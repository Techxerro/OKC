import React from "react";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ConsultancySection = () => {
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
      // emailjs.sendForm('service_rj4gztt', 'template_vkzo0e6', form.current, 'bgbmeq-Xf61gfxfYC')
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
      <section className="pad100 text-center bggreen">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 text-center">
              <h2 data-aos="fade-down">
                <span className="colorgreen">Want</span> to Go Green?
              </h2>
              <p data-aos="fade-up">
                Ask us about our options for making your cleaning experience
                more environmentally friendly!
              </p>

              <div className="d-flex justify-content-center">
                <button
                  className="greenbtn3"
                  data-aos="fade-up"
                  onClick={() => setopenPopup(!openPopup)}
                >
                  {/* <svg
                    width="41"
                    height="16"
                    viewBox="0 0 41 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z"
                      fill="white"
                    />
                  </svg> */}
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
    </>
  );
};

export default ConsultancySection;
