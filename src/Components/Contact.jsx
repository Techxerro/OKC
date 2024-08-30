import React from "react";
import "./contact.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import emailjs from "emailjs-com";
import { useRef } from "react";
import ConsultancySection from "./ConsultancySection";

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_mgh9zss",
        "template_sdbs8aa",
        form.current,
        "Dn6ucPwCcl8RRCE9b"
      )
      .then(
        (result) => {
          alert("Your mail has been sent successfully");
          window.location.reload(true);
          //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header />

      <section className="contact thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Contact Us</p>
              <h2 data-aos="fade-up">
                If you need cleaning anywhere <br />
                contact us
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div className="contact-info" data-aos="fade-down">
                <h4 data-aos="fade-down">Get In Touch</h4>
                <div className="mobilegrid">
                  <div className="d-grid" data-aos="fade-right">
                    <b>Visit us</b>
                    <span>
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/2809+Greenfield+Dr,+Edmond,+OK+73012,+USA/@35.6411536,-97.5207265,17z/data=!3m1!4b1!4m6!3m5!1s0x87b21e7ec0893f11:0x84225b4a12571f3c!8m2!3d35.6411536!4d-97.5207265!16s%2Fg%2F11c2hg_lw5?entry=ttu"
                      >
                        2809 Greenfield Dr. Edmond, Oklahoma 73012
                      </a>
                    </span>
                  </div>
                  <div className="d-grid" data-aos="fade-right">
                    <b>Chat to us</b>
                    <span>
                      <a href="mailto:okcuptowncleaning@gmail.com">
                        okcuptowncleaning@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="d-grid" data-aos="fade-right">
                    <b>Call us</b>
                    <span>
                      <a href="tel:405-882-2863">405-882-2863</a>
                    </span>
                  </div>
                  <div className="d-grid" data-aos="fade-right">
                    <b>Social Media</b>
                    <div
                      className="d-flex"
                      style={{ paddingTop: "15px", gap: "10px" }}
                    >
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_89_738)">
                          <path
                            d="M9.50016 1.5C11.6511 1.5 11.9195 1.5075 12.7634 1.545C13.6065 1.5825 14.1805 1.70775 14.6856 1.89375C15.2081 2.08425 15.6482 2.34225 16.0884 2.7585C16.491 3.13342 16.8025 3.58694 17.0012 4.0875C17.1967 4.56525 17.3297 5.10975 17.3693 5.9085C17.4065 6.708 17.4168 6.96225 17.4168 9C17.4168 11.0378 17.4089 11.292 17.3693 12.0915C17.3297 12.8903 17.1967 13.434 17.0012 13.9125C16.803 14.4133 16.4915 14.867 16.0884 15.2415C15.6925 15.6227 15.2139 15.9178 14.6856 16.1063C14.1813 16.2915 13.6065 16.4175 12.7634 16.455C11.9195 16.4903 11.6511 16.5 9.50016 16.5C7.3492 16.5 7.08083 16.4925 6.23691 16.455C5.39379 16.4175 4.81983 16.2915 4.31475 16.1063C3.78617 15.9184 3.30737 15.6232 2.91191 15.2415C2.50928 14.8666 2.19778 14.4131 1.99912 13.9125C1.80279 13.4347 1.67058 12.8903 1.631 12.0915C1.59379 11.292 1.5835 11.0378 1.5835 9C1.5835 6.96225 1.59141 6.708 1.631 5.9085C1.67058 5.109 1.80279 4.566 1.99912 4.0875C2.19722 3.58663 2.5088 3.13299 2.91191 2.7585C3.30749 2.37692 3.78625 2.0818 4.31475 1.89375C4.81983 1.70775 5.393 1.5825 6.23691 1.545C7.08083 1.50975 7.3492 1.5 9.50016 1.5ZM9.50016 5.25C8.45035 5.25 7.44353 5.64509 6.7012 6.34835C5.95887 7.05161 5.54183 8.00544 5.54183 9C5.54183 9.99456 5.95887 10.9484 6.7012 11.6517C7.44353 12.3549 8.45035 12.75 9.50016 12.75C10.55 12.75 11.5568 12.3549 12.2991 11.6517C13.0415 10.9484 13.4585 9.99456 13.4585 9C13.4585 8.00544 13.0415 7.05161 12.2991 6.34835C11.5568 5.64509 10.55 5.25 9.50016 5.25ZM14.646 5.0625C14.646 4.81386 14.5417 4.5754 14.3562 4.39959C14.1706 4.22377 13.9189 4.125 13.6564 4.125C13.394 4.125 13.1423 4.22377 12.9567 4.39959C12.7711 4.5754 12.6668 4.81386 12.6668 5.0625C12.6668 5.31114 12.7711 5.5496 12.9567 5.72541C13.1423 5.90123 13.394 6 13.6564 6C13.9189 6 14.1706 5.90123 14.3562 5.72541C14.5417 5.5496 14.646 5.31114 14.646 5.0625ZM9.50016 6.75C10.1301 6.75 10.7341 6.98705 11.1795 7.40901C11.6249 7.83097 11.8752 8.40326 11.8752 9C11.8752 9.59674 11.6249 10.169 11.1795 10.591C10.7341 11.0129 10.1301 11.25 9.50016 11.25C8.87027 11.25 8.26618 11.0129 7.82078 10.591C7.37538 10.169 7.12516 9.59674 7.12516 9C7.12516 8.40326 7.37538 7.83097 7.82078 7.40901C8.26618 6.98705 8.87027 6.75 9.50016 6.75Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_89_738">
                            <rect width="19" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_89_741)">
                          <path
                            d="M11.0837 10.1251H13.0628L13.8545 7.12512H11.0837V5.62512C11.0837 4.85262 11.0837 4.12512 12.667 4.12512H13.8545V1.60512C13.5964 1.57287 12.6219 1.50012 11.5927 1.50012C9.44333 1.50012 7.91699 2.74287 7.91699 5.02512V7.12512H5.54199V10.1251H7.91699V16.5001H11.0837V10.1251Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_89_741">
                            <rect width="19" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_89_732)">
                          <path
                            d="M5.20508 3.75002C5.20488 4.14784 5.04665 4.52929 4.76521 4.81046C4.48376 5.09162 4.10215 5.24947 3.70433 5.24927C3.3065 5.24907 2.92505 5.09084 2.64389 4.8094C2.36272 4.52795 2.20488 4.14634 2.20508 3.74852C2.20528 3.35069 2.3635 2.96924 2.64495 2.68808C2.92639 2.40691 3.308 2.24907 3.70583 2.24927C4.10365 2.24947 4.48511 2.40769 4.76627 2.68914C5.04743 2.97058 5.20528 3.35219 5.20508 3.75002ZM5.25008 6.36002H2.25008V15.75H5.25008V6.36002ZM9.99008 6.36002H7.00508V15.75H9.96008V10.8225C9.96008 8.07752 13.5376 7.82252 13.5376 10.8225V15.75H16.5001V9.80252C16.5001 5.17502 11.2051 5.34752 9.96008 7.62002L9.99008 6.36002Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_89_732">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_89_735)">
                          <path
                            d="M17.5447 4.24195C16.9404 4.49522 16.2994 4.66155 15.6432 4.73545C16.3349 4.34352 16.8526 3.72671 17.0998 2.99994C16.4507 3.36594 15.739 3.62244 14.9972 3.76119C14.4989 3.25613 13.8384 2.92117 13.1185 2.80838C12.3986 2.6956 11.6594 2.81131 11.0161 3.13753C10.3727 3.46376 9.86114 3.98221 9.56088 4.61229C9.26062 5.24237 9.1885 5.94878 9.35574 6.6217C8.03929 6.55919 6.75142 6.23509 5.57576 5.67044C4.4001 5.1058 3.36293 4.31323 2.53158 3.3442C2.23731 3.82303 2.08267 4.36736 2.08349 4.92144C2.08349 6.00894 2.66774 6.9697 3.55599 7.5322C3.03034 7.51652 2.51625 7.38203 2.05658 7.13995V7.17894C2.05674 7.90322 2.32129 8.60516 2.80537 9.16574C3.28946 9.72632 3.96329 10.1111 4.71262 10.2547C4.22465 10.38 3.71299 10.3984 3.21637 10.3087C3.42764 10.9321 3.83942 11.4773 4.39405 11.868C4.94868 12.2587 5.61839 12.4753 6.30941 12.4874C5.62263 12.9984 4.83626 13.3762 3.99528 13.5991C3.15429 13.822 2.27518 13.8856 1.4082 13.7864C2.92163 14.7085 4.6834 15.198 6.48279 15.1964C12.5731 15.1964 15.9036 10.4167 15.9036 6.27145C15.9036 6.13645 15.8997 5.99994 15.8933 5.86645C16.5416 5.42257 17.1011 4.87271 17.5455 4.24269L17.5447 4.24195Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_89_735">
                            <rect width="19" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              <form ref={form} onSubmit={sendEmail}>
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

      <ConsultancySection />

      <Footer />
    </>
  );
};

export default Contact;
