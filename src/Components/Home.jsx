import React, { useEffect, useState, useRef } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Autoplay, Scrollbar, Pagination } from "swiper/modules";
import SliderData from "./SliderData/SliderData";
import ServicesData from "./ServiceData/ServiceData";
import TestimonialData from "./TestimonialData";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ConsultancySection from "./ConsultancySection";
import videocover from "../Assets/img/postervideo.png";
import emailjs from "emailjs-com";
import Reviewsection from "./Reviewsection";
import HowWeWork from "./Howwework";
import ContactForm from "./Contactform";
import Testimonials from "./Testimonials";
import WhoWeServe from "./Whoweserve";
import Newhomepage from "./Newhomepage";

const Home = () => {
  const form = useRef();

  const owlOptions = {
    items: 3, // Display one item at a time
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    navText: [
      `<svg width="29" height="8" viewBox="0 0 29 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.7308 0.976313 4.7308 0.65973 4.53553 0.464468C4.34027 0.269206 4.02369 0.269206 3.82843 0.464468L0.646446 3.64645ZM29 3.5L1 3.5L1 4.5L29 4.5L29 3.5Z" fill="black"/></svg>`,
      `<svg width="29" height="8" viewBox="0 0 29 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.3536 4.35355C28.5488 4.15829 28.5488 3.84171 28.3536 3.64645L25.1716 0.464466C24.9763 0.269204 24.6597 0.269204 24.4645 0.464466C24.2692 0.659728 24.2692 0.976311 24.4645 1.17157L27.2929 4L24.4645 6.82843C24.2692 7.02369 24.2692 7.34027 24.4645 7.53553C24.6597 7.7308 24.9763 7.7308 25.1716 7.53553L28.3536 4.35355ZM0 4.5H28V3.5H0V4.5Z" fill="black"/></svg>        `,
    ],
    addClassActive: true, // Add class to active item
    addClasses: true,
    responsive: {
      0: { items: 1 },
      480: { items: 1 },
      768: { items: 2 },
      1280: { items: 3 },
    },
  };

  const testimonies = {
    nav: true,
    navText: [
      `<svg width="77" height="8" viewBox="0 0 77 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451187 3.84172 0.451187 4.1583 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53554 7.53554C4.7308 7.34028 4.7308 7.0237 4.53554 6.82843L1.70711 4.00001L4.53554 1.17158C4.7308 0.976317 4.7308 0.659735 4.53554 0.464472C4.34027 0.26921 4.02369 0.26921 3.82843 0.464472L0.646446 3.64645ZM77 3.5L1 3.50001L1 4.50001L77 4.5L77 3.5Z" fill="black"/></svg>`,
      `<svg width="77" height="8" viewBox="0 0 77 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M76.3536 4.35357C76.5488 4.1583 76.5488 3.84172 76.3536 3.64646L73.1716 0.464479C72.9763 0.269217 72.6597 0.269217 72.4645 0.464479C72.2692 0.659741 72.2692 0.976323 72.4645 1.17159L75.2929 4.00001L72.4645 6.82844C72.2692 7.0237 72.2692 7.34028 72.4645 7.53555C72.6597 7.73081 72.9763 7.73081 73.1716 7.53555L76.3536 4.35357ZM-8.74228e-08 4.5L76 4.50001L76 3.50001L8.74228e-08 3.5L-8.74228e-08 4.5Z" fill="black"/></svg>`,
    ],
  };

  useEffect(() => {
    if (!!window.IntersectionObserver) {
      let video = document.querySelector("video");
      let isPaused = false; /* flag for auto-pausing of the video */
      let observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio !== 1 && !video.paused) {
              video.pause();
              isPaused = true;
            } else if (isPaused) {
              video.play();
              isPaused = false;
            }
          });
        },
        { threshold: 1 }
      );
      observer.observe(video);
    }
  });

  const [formData, setFormData] = useState({
    location: "",
    services: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [openPopup, setopenPopup] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(form.current);
    // emailjs.sendForm('service_mgh9zss', 'template_c964zir', form.current, 'Dn6ucPwCcl8RRCE9b')
    // .then((result) => {

    //     console.log(result.text);
    //     alert('Your mail has been sent successfully');

    //     window.location.reload(true);

    //     //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
    // }, (error) => {
    //     console.log(error.text);
    // });
  };

  return (
    <>
      <Header />
      <section className="hero-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          scrollbar={{ draggable: true, dragSize: 70 }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          }}
          modules={[Autoplay, Scrollbar, Pagination]}
        >
          {SliderData.map((obj, index) => {
            return (
              <>
                <SwiperSlide
                  key={index}
                  style={{
                    background: `url(${obj.img})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container-fluid">
                    <div
                      className="row align-items-center justify-content-center"
                      style={{ height: "850px" }}
                    >
                      <div className="col-xl-12 col-lg-12 col-md-12 col-lg-12 slider-content">
                        <p data-aos="fade-down">
                          Leave the Cleaning to the Experts
                        </p>
                        <h2 data-aos="fade-down">{obj.subTitle}</h2>

                        {/* <form action="" ref={form} onSubmit={(e) => sendEmail}>
                          <div className="d-flex">
                            <label className="location">
                              <select
                                name="location"
                                onChange={handleInputChange}
                                value={formData.location}
                                required
                              >
                                <option selected>LOCATION </option>
                                Luther, Guthrie, Norman, Yukon, Midwest City/Del
                                City, Moore, Edmond, Chickasha, ElReno, Tulsa,
                                <option value="Luther">Luther</option>
                                <option value="Guthrie">Guthrie</option>
                                <option value="Norman">Norman</option>
                                <option value="Yukon">Yukon</option>
                                <option value="Midwest City/Del City">
                                  Midwest City/Del City
                                </option>
                                <option value="Moore">Moore</option>
                                <option value="Edmond">Edmond</option>
                                <option value="Chickasha">Chickasha</option>
                                <option value="ElReno">ElReno</option>
                                <option value="Tulsa">Tulsa</option>=
                              </select>
                            </label>
                            <label className="typeservices">
                              <select
                                name="services"
                                onChange={handleInputChange}
                                value={formData.services}
                                required
                              >
                                <option value="">TYPES OF SERVICES</option>
                                <option value="dusting">Dusting</option>
                                <option value="gradening">Gardening</option>
                                <option value="Mopping">Mopping</option>
                              </select>
                            </label>
                          </div>
                          <div className="d-flex">
                            <label className="bedrooms">
                              <select name="bedroom" required>
                                <option value="">BEDROOMS</option>
                                <option value="1">1 Bedroom</option>
                                <option value="2">2 Bedroom</option>
                                <option value="3">3 Bedroom</option>
                              </select>
                            </label>
                            <label className="bathroom">
                              <select name="bathroom" required>
                                <option value="">BATHROOM</option>
                                <option value="1">1 Bathroom</option>
                                <option value="2">2 Bathroom</option>
                                <option value="3">3 Bathroom</option>
                              </select>
                            </label>
                          </div>
                          <input
                            type="button"
                            value="Get An Exact Price"
                            // onClick={()=>setopenPopup(!openPopup)}
                          />
                          <div
                            className="popupoverlay"
                            style={{ display: openPopup ? "block" : "none" }}
                            onClick={() => setopenPopup(!openPopup)}
                          ></div>

                          <div
                            className="popup"
                            style={{ display: openPopup ? "block" : "none" }}
                          >
                            <h2>Enter you Information</h2>
                            <p>We will be in touch soon!!!</p>
                            <div className="d-block">
                              <label>
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Name"
                                  required
                                />
                              </label>
                              <label>
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Email"
                                  required
                                />
                              </label>
                              <input type="submit" value="Submit" />
                            </div>
                          </div>
                        </form> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>

      <section className="Why-section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-xl-6 col-md-12 col-sm-12  video-container d-flex"
              style={{ gap: "30px", position: "relative" }}
            >
              {/* video in hosting  */}
              <video
                controls
                poster={videocover}
                style={{ objectFit: "cover" }}
                data-aos="fade-down"
                width="300"
                height="470"
              >
                <source
                  src="https://okcuptowncleaning.com/video/cleaning.mp4"
                  type="video/mp4"
                />
              </video>
              <img
                src={require("../Assets/img/why_people_love_us.png")}
                alt=""
                data-aos="fade-left"
                data-aos-delay="300"
                className="whyus-img"
                style={{ height: "305px" }}
              />
              <div className="videoBox" data-aos="fade-up" data-aos-delay="400">
                <p
                  style={{
                    borderLeft: "3px solid #158842",
                    paddingLeft: "15px",
                  }}
                >
                  We value our customers and strive to provide top-notch
                  service. Many have expressed their love for working with us,
                  and we love our customers too!{" "}
                </p>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <img
                    src={require("../Assets/img/author.png")}
                    alt=""
                    width="40px"
                    height={"40px"}
                  />
                  <span>Keri B</span>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-xl-1 col-md-12 col-sm-12"></div>

            <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12">
              <h2 data-aos="fade-up">
                <span className="colorgreen">Why people</span> love working with
                us
              </h2>
              <p data-aos="fade-down">
                At OKC Uptown Cleaning, we understand that your time is
                valuable. That's why we take the hassle out of cleaning,
                allowing you to focus on what matters most.
              </p>
              <h4 data-aos="fade-down" data-aos-delay="250">
                We Founded it in <span className="colorgreen">2015</span>
              </h4>
              <a href="/about">
                <button
                  className="greenbtn"
                  data-aos="fade-down"
                  data-aos-delay="500"
                >
                  Know More
                  <svg
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                      fill="#000"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="Projects">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-1 col-lg-12 col-md-1 col-sm-12"></div>
            <div
              className="col-xl-3 col-lg-4 col-md-12 col-sm-12"
              data-aos="fade-down"
            >
              <h2>
                <span className="colorgreen">700+</span> Projects Done
              </h2>
              <p>
                With over 700 successful projects under our belt, OKC Uptown
                Cleaning has earned a reputation for delivering outstanding
                results. Our track record speaks for itself, as we consistently
                exceed our clients' expectations and leave their spaces looking
                immaculate. Join the growing list of satisfied customers who
                have experienced the OKC Uptown Cleaning difference.
              </p>
              <a href="/contact-us">
                <button className="greenbtn" data-aos="fade-down">
                  Know More
                  <svg
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                      fill="#000"
                    />
                  </svg>
                </button>
              </a>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <OwlCarousel margin={20} loop {...owlOptions}>
                <div className="item custom-first-item">
                  <img
                    src={require("../Assets/img/project1.png")}
                    alt=""
                    data-aos="fade-left"
                  />
                  <h3>Kitchen Cleaning</h3>
                </div>
                <div className="item">
                  <img
                    src={require("../Assets/img/project2.png")}
                    alt=""
                    data-aos="fade-left"
                  />
                  <h3>Bedroom</h3>
                </div>
                <div className="item">
                  <img
                    src={require("../Assets/img/project1.png")}
                    alt=""
                    data-aos="fade-left"
                  />
                  <h3>Bathroom</h3>
                </div>
                <div className="item">
                  <img
                    src={require("../Assets/img/project2.png")}
                    alt=""
                    data-aos="fade-left"
                  />
                  <h3>Deep Cleaning</h3>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 justify-content-center text-center">
              <h2 data-aos="fade-down">
                <span className="colorgreen">Our</span> Services
              </h2>
              <p data-aos="fade-up">
                We offer a comprehensive range of cleaning services tailored to
                meet your specific needs. Whether it's residential cleaning,
                commercial cleaning, deep cleaning, move-in/move-out cleaning,
                post-construction cleaning, office cleaning, window cleaning,
                carpet cleaning, or upholstery cleaning, our dedicated team is
                here to make your space shine.
              </p>
            </div>
            <div className=" row service-outer-wrapper">
              {ServicesData.map((obj, index) => {
                return (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <div
                        className="services-wrapper"
                        key={index}
                        style={{ background: `url(${obj.img})` }}
                        data-aos="fade-left"
                      >
                        <div>
                          <a href={obj.link}>
                            <h3>
                              {obj.head}
                              <svg
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
                              </svg>
                            </h3>
                            <p>{obj.subtitle}</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="mobile-slider row ">
              <OwlCarousel margin={20} loop {...owlOptions}>
                {ServicesData.map((obj, index) => {
                  return (
                    <>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div
                          className="services-wrapper"
                          key={index}
                          style={{ background: `url(${obj.img})` }}
                          data-aos="fade-left"
                        >
                          <div>
                            <a href={obj.link}>
                              <h3>
                                {obj.head}
                                <svg
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
                                </svg>
                              </h3>
                              <p>{obj.subtitle}</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="whyus-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <img
                src={require("../Assets/img/why-choose-us.png")}
                id="whyusimg"
                alt=""
                data-aos="fade-right"
                data-aos-delay="500"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h2 data-aos="fade-down">
                <span className="colorgreen">Why</span> Choose us?
              </h2>
              <p data-aos="fade-up">
                Don't settle for anything less than perfection. Experience the
                OKC UPTOWN difference today and discover a whole new level of
                cleanliness and satisfaction. Contact us now for a free quote
                and let us make your space shine like never before!
              </p>
              <p data-aos="fade-up">
                Experience a new standard of perfection with OKC UPTOWN. Elevate
                your surroundings to unparalleled levels of cleanliness and
                satisfaction.
              </p>{" "}
              <a href="/Why-choose-us">
                <button className="greenbtn" data-aos="fade-up">
                  Know More
                  <svg
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                      fill="#000"
                    />
                  </svg>
                </button>
              </a>
              <br />
              <br />
              <br />
              <div className="claims" style={{ gap: "11%" }}>
                <div className="d-grid text-center" data-aos="fade-left">
                  <center>
                    <img src={require("../Assets/img/icon1.png")} alt="" />
                  </center>
                  <span className="colorgreen">
                    <b>Over</b>
                  </span>
                  354000 Cleans
                </div>
                <div
                  className="d-grid text-center"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <center>
                    <img src={require("../Assets/img/icon2.png")} alt="" />
                  </center>
                  <span className="colorgreen">
                    <b>Eco-Friendly</b>
                  </span>
                  Cleaning Products
                </div>
                <div
                  className="d-grid text-center"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  <center>
                    <img src={require("../Assets/img/icon3.png")} alt="" />
                  </center>
                  <span className="colorgreen">
                    <b>100%</b>
                  </span>
                  Satisfaction
                </div>
                <div
                  className="d-grid text-center"
                  data-aos="fade-left"
                  data-aos-delay="900"
                >
                  <center>
                    <img src={require("../Assets/img/icon4.png")} alt="" />
                  </center>
                  <span className="colorgreen">
                    <b>Cost</b>
                  </span>
                  Effective
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pad100 bggreen testimonials text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <h2>
                <span className="colorgreen text-center">What Clients</span>{" "}
                have to say about us?
              </h2>
              <br />
              <br />
              <br />
              <img
                className="quote1"
                src={require("../Assets/img/quote.png")}
                alt=""
              />
              <img
                className="quote2"
                src={require("../Assets/img/quote.png")}
                alt=""
              />
              <OwlCarousel
                margin={20}
                loop
                items={1}
                autoplay
                autoplayTimeout={3000}
                {...testimonies}
              >
                {TestimonialData.map((obj, index) => {
                  return (
                    <div className="testimonials-wrapper" key={obj.id}>
                      <img
                        src={obj.profileimg}
                        alt=""
                        className="profile"
                        data-aos="fade-down  "
                      />

                      <div className="vector d-flex">
                        <img
                          src={require("../Assets/img/vector.png")}
                          alt=""
                          className=" vc1"
                        />
                        <img
                          src={require("../Assets/img/vector.png")}
                          alt=""
                          className=" vc2"
                        />
                      </div>

                      <div
                        className="testimonials-content"
                        data-aos="fade-zoom-in"
                      >
                        <p>{obj.comment}</p>
                        <br />
                        <h4>{obj.name}</h4>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="pad100 text-center cleaning-services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 text-center">
              <h2 data-aos="fade-up">
                <span className="colorgreen">OKC</span> Uptown cleaning service
              </h2>
              <p>
                OKC Uptown Cleaning is a locally owned and operated cleaning
                company dedicated to providing exceptional cleaning services.
                With years of experience and a passion for cleanliness, we have
                built a reputation for excellence and have become the go-to
                choice for residential and commercial cleaning needs.
              </p>
              <p>
                Ready to experience the OKC Uptown Cleaning difference? Contact
                us today to book your cleaning service or request a free quote.
                Let us handle the dirty work while you enjoy a clean and
                refreshing space.
              </p>

              <div
                className="btn-container justify-content-center btnhover"
                style={{ gap: "5%", paddingTop: "35px" }}
              >
                <a href="/services/remodel-cleanup">
                  <button className="greenbtn" data-aos="fade-down">
                    {" "}
                    POST CONSTRUCTION CLEANING
                  </button>{" "}
                </a>
                <a href="/services/basic-cleaning">
                  <button className="greenbtn" data-aos="fade-down">
                    {" "}
                    MOVE OUT CLEANING
                  </button>
                </a>{" "}
                <a href="/services/deep-cleaning">
                  <button className="greenbtn" data-aos="fade-down">
                    {" "}
                    DEEP CLEANING
                  </button>
                </a>
                <button className="blackbtn" data-aos="fade-down">
                  {" "}
                  <a href="tel:+4058822863"> CALL US TODAY </a>
                </button>
              </div>
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

export default Home;
