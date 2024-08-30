import React from "react";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Ethicalsource.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ethicalpageimg } from "../Assets/img/ethical-page";

const Ethicalsource = () => {
  const [openPopup, setopenPopup] = useState(false);
  const [currentTab, setCurrentTab] = useState("EthicalSuppliers");
  const [currentImage, setCurrentImage] = useState(
    ethicalpageimg.ethicalsupplier
  );
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

  const openCity = (evt, cityName, imageSrc) => {
    // var i, tabcontent, tablinks;
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    // document.getElementById(cityName).style.display = "block";
    // evt.currentTarget.className += " active";

    // setCurrentTab(cityName);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    setCurrentImage(imageSrc);
  };

  return (
    <>
      <Header />
      {/* Main Page */}
      <section className="ethicalbg thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Clean with Conscience</p>
              <h2 data-aos="fade-up">
                Discover OKC Uptown Cleaning’s Commitment to Ethical Sourcing
                and Sustainability.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="padding50 whyus-section">
        <div className="container">
          <div className="row align-items-center ">
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
              style={{ paddingRight: "30px" }}
            >
              <h2 data-aos="fade-down">
                <span>Introduction :</span>
              </h2>
              <p data-aos="fade-up">
                OKC Uptown Cleaning is proud of its ethical sourcing commitment.
                We believe that responsible sourcing is important for our
                workers and suppliers to have a better tomorrow. This makes us
                unique among other cleaning firms since transparency, fair labor
                practices, and community impacts are not prioritized as it
                should be in this industry. Now let’s look at some of those
                specific practices that underline our commitment towards ethical
                sourcing.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <img
                src={ethicalpageimg.introimg}
                id="whyusimg"
                alt=""
                data-aos="flip-left"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sourcing-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 data-aos="fade-down">
                <span>Transparency</span> in Sourcing
              </h2>
              <div className="tab">
                <button
                  className="tablinks active"
                  onClick={(e) =>
                    openCity(
                      e,
                      "EthicalSuppliers",
                      ethicalpageimg.ethicalsupplier
                    )
                  }
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  Ethical Suppliers
                </button>
                <button
                  className="tablinks"
                  onClick={(e) =>
                    openCity(e, "FairWages", ethicalpageimg.fairwages)
                  }
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  Fair Wages and Safe Working Conditions
                </button>
                <button
                  className="tablinks"
                  onClick={(e) =>
                    openCity(
                      e,
                      "Sustainable Practices",
                      ethicalpageimg.sustainablepractices
                    )
                  }
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  Sustainable Practices
                </button>
              </div>

              <div
                id="EthicalSuppliers"
                className="tabcontent "
                style={{ display: "block" }}
              >
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <img src={currentImage} alt="" />
                  </div>
                  <div className="col-sm-6 col-12">
                    <p>
                      We have strict ethical standards that guide our selection
                      of suppliers. Our partners must promote fair labor
                      practices ensuring every employee gets decent pay and
                      works under safe conditions. It means we must carry out
                      thorough audits and maintain constant communication so as
                      to ensure compliance.
                    </p>
                  </div>
                </div>
              </div>

              <div id="FairWages" className="tabcontent ">
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <img src={currentImage} alt="" />
                  </div>
                  <div className="col-sm-6 col-12">
                    <p>
                      Our sourcing strategy relies on fair wages. Besides
                      enhancing job satisfaction and productivity, this fosters
                      economic stability by ensuring just rewards are given to
                      all workers within our supply chain. Safety at work is
                      similarly a non-negotiable issue. To achieve this, our
                      suppliers will be tied up by very strong health and safety
                      requirements, which will guarantee a stress-free working
                      environment for all employees.
                    </p>
                  </div>
                </div>
              </div>
              <div id="Sustainable Practices" className="tabcontent ">
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <img src={currentImage} alt="" />
                  </div>
                  <div className="col-sm-6 col-12">
                    <p>
                      We are committed to sustainability. We require suppliers
                      to use environmentally sound practices, such as waste
                      reduction, carbon footprint minimization, and eco-friendly
                      materials. Our contribution is based on supporting
                      sustainable development strategies that aim to save our
                      planet from climatic changes and conserve raw resources
                      for future generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2
                data-aos="flip-right"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                "Empowering Communities and Protecting the Planet: OKC Uptown
                Cleaning’s Ethical Sourcing Vision."
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="padding50 whyus-section">
        <div className="container">
          <div className="row align-items-center pb-5">
            <div className="col-12 text-center pb-5">
              <h2 data-aos="fade-down">
                <span>Community</span> Impact
              </h2>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-lg-1 order-2 "
              style={{ paddingRight: "30px" }}
            >
              <h3 data-aos="fade-down">
                <span>Economic</span> Benefits
              </h3>
              <p data-aos="fade-up">
                Our fair sourcing methods have a big effect on local
                communities. By collaborating with local suppliers and ensuring
                that there are fair employment conditions, we contribute to the
                growth of these areas economically. The concept not only
                provides stable jobs but also strengthens the local economy.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-lg-2 order-1">
              <img
                src={ethicalpageimg.econimicimg}
                id="whyusimg"
                alt=""
                data-aos="fade-left"
                data-aos-delay="500"
              />
            </div>
          </div>

          <div className="row align-items-center pb-5">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <img
                src={ethicalpageimg.environmentimg}
                id="whyusimg"
                alt=""
                data-aos="fade-right"
                data-aos-delay="500"
              />
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
              style={{ paddingRight: "30px" }}
            >
              <h3 data-aos="fade-down">
                <span>Environmental</span> Benefits
              </h3>
              <p data-aos="fade-up">
                Furthermore, beyond economic impacts, our focus on
                sustainability has seen us bring substantial environmental
                benefits to the communities we serve. Through such conservation
                measures by our suppliers as reduced pollution and limited
                utilization of natural resources; this implies healthier and
                more lively societies.
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-lg-1 order-2 "
              style={{ paddingRight: "30px" }}
            >
              <h3 data-aos="fade-down">
                <span>Responsibility</span>
              </h3>
              <p data-aos="fade-up">
                We understand that social responsibility is vital. Besides
                observing ethical sourcing, we also promote community schemes.
                These initiatives range from local educational programs’
                sponsorship, cleaning projects within communities to sensitizing
                people on the importance of sustainable practices.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-lg-2 order-1">
              <img
                src={ethicalpageimg.responsibilityimg}
                id="whyusimg"
                alt=""
                data-aos="fade-left"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="whatsetusapart-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center">
              <h2 data-aos="fade-down" data-aos-delay="300">
                <span>What</span> sets us Apart?
              </h2>
              <p className="subhead" data-aos="fade-up" data-aos-delay="300">
                Ask us about our options for making your cleaning experience
                <br /> more environmentally friendly
              </p>
            </div>

            <div className="col-lg-6 col-12">
              <img
                src={ethicalpageimg.whatsetuspartimg}
                alt=""
                className="whatsetuspartimg"
              />
            </div>
            <div className="col-lg-5 col-12 pointerwrapper">
              <div className="pointers">
                <div
                  className="pointer-content"
                  data-aos-delay="400"
                  data-aos="fade-left"
                >
                  <h4>01</h4>
                  <p>
                    We enforce strict benchmarks with regular audits and
                    feedback loops to ensure supplier compliance, safeguarding
                    our supply chain's credibility
                  </p>
                </div>
              </div>
              <div className="pointers">
                <div
                  className="pointer-content"
                  data-aos-delay="800"
                  data-aos="fade-left"
                >
                  <h4>02</h4>
                  <p>
                    We go beyond compliance, seeking innovative ways to improve
                    worker well-being and environmental health, driving positive
                    industry change.
                  </p>
                </div>
              </div>
              <div className="pointers">
                <div
                  className="pointer-content"
                  data-aos-delay="1200"
                  data-aos="fade-left"
                >
                  <h4>03</h4>
                  <p>
                    We empower customers with detailed product origins, helping
                    them make informed choices based on their values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="value-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h2 data-aos="fade-down" data-aos-delay="300">
                Our <span>Values</span>
              </h2>
              <p className="subhead" data-aos="fade-up" data-aos-delay="300">
                Ask us about our options for making your cleaning experience
                <br /> more environmentally friendly
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <div
                className="d-flex gap-4 pb-5"
                data-aos="flip-up"
                data-aos-delay="1000"
                data-aos-duration="1000"
              >
                <img
                  src={ethicalpageimg.icon1}
                  alt=""
                  width="40px"
                  height="40px"
                />
                <div>
                  <h4>Expanding Our Network</h4>
                  <p>
                    In light of this growth, we want to include more ethically
                    sound suppliers in our network. Through this process we not
                    only increase our impact but also facilitate a global
                    community of ethical businesses.
                  </p>
                </div>
              </div>

              <div
                className="d-flex gap-4 pb-5"
                data-aos="flip-down"
                data-aos-delay="1000"
                data-aos-duration="1000"
              >
                <img
                  src={ethicalpageimg.icon2}
                  alt=""
                  width="40px"
                  height="40px"
                />
                <div>
                  <h4>Sustainable Technologies</h4>
                  <p>
                    Sustainability thrives through originality. We are pouring
                    money into modern technologies which are able to reduce
                    environmental degradation while enhancing efficiency. From
                    energy saving cleaning machines to biodegradable cleaning
                    agents, we endeavor for ways through which we can reduce our
                    ecological footprint.
                  </p>
                </div>
              </div>

              <div
                className="d-flex gap-4 "
                data-aos="flip-up"
                data-aos-delay="1000"
                data-aos-duration="1000"
              >
                <img
                  src={ethicalpageimg.icon3}
                  alt=""
                  width="40px"
                  height="40px"
                />
                <div>
                  <h4>Community Engagement</h4>
                  <p>
                    Our dedication towards people’s lives is evident. Our aim is
                    to beef up support for various local initiatives while
                    providing more resources and opportunities meant for
                    community development.The company seeks a strong foundation
                    by fostering strong relationships with community leaders and
                    organizations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 ">
              <div className="imgbox">
                <img
                  src={ethicalpageimg.valuesimg}
                  alt=""
                  style={{ float: "right" }}
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="3000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vision">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img
                src={ethicalpageimg.visionimg}
                alt=""
                height="100%"
                width="100%"
              />
            </div>
            <div className="col-lg-6 col-12 visioncontent">
              <h2>
                Our Vision for <br />
                the Future
              </h2>
              <p>
                OKC Uptown Cleaning believes ethical sourcing to be ingrained
                within our identity rather than being limited just to company
                policies. It is through these values such as honesty, fair wages
                for every worker regardless their nationality, that we make
                substantial change at the lives of our employees, ensure
                survival of environment by ensuring minimal harm is done onto
                it, and maintain vibrance in societies where our workers operate
                from.
              </p>
              <br />
              <h2>Get In touch</h2>
              <p>Mail us: okcuptowncleaning@gmail.com</p>
              <p>Phone: 405-882-2863</p>
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
};

export default Ethicalsource;
