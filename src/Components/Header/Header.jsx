import React from "react";
import "./Header.css";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Header = () => {
  const [openMenu, setopenMenu] = useState(false);
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

          //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <header>
        <section className="top-header" data-aos="fade-down">
          <div className="container ">
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 col-md-5 col-sm-5 timing d-flex align-items-center"
                style={{ gap: "10px" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_15_71)">
                    <circle cx="12" cy="12" r="11" fill="white" />
                    <path
                      d="M12 23.25C9.77497 23.25 7.59989 22.5902 5.74984 21.354C3.89979 20.1179 2.45785 18.3609 1.60636 16.3052C0.754875 14.2495 0.532087 11.9875 0.966171 9.80524C1.40025 7.62295 2.47171 5.61839 4.04505 4.04505C5.61839 2.47171 7.62295 1.40025 9.80524 0.966171C11.9875 0.532087 14.2495 0.754875 16.3052 1.60636C18.3609 2.45785 20.1179 3.89979 21.354 5.74984C22.5902 7.59989 23.25 9.77497 23.25 12C23.25 14.9837 22.0647 17.8452 19.955 19.955C17.8452 22.0647 14.9837 23.25 12 23.25ZM12 2.25001C10.0716 2.25001 8.18657 2.82183 6.5832 3.89318C4.97982 4.96452 3.73013 6.48726 2.99218 8.26884C2.25423 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7935 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.75 9.41414 20.7228 6.93419 18.8943 5.10571C17.0658 3.27723 14.5859 2.25001 12 2.25001Z"
                      fill="white"
                    />
                    <path
                      d="M15.18 16.245L11.4675 12.5325C11.398 12.4624 11.343 12.3793 11.3057 12.2879C11.2684 12.1966 11.2494 12.0987 11.25 12V6H12.75V11.6925L16.245 15.18L15.18 16.245Z"
                      fill="#158842"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_71">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Monday-Saturday 7AM - 6PM</span>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 social-icon">
                <a
                  href="https://www.instagram.com/okcuptowncleaning/"
                  className="insta"
                   target="_blank"
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_14_63)">
                      <path
                        d="M9.49992 1.5C11.6509 1.5 11.9193 1.5075 12.7632 1.545C13.6063 1.5825 14.1803 1.70775 14.6853 1.89375C15.2078 2.08425 15.648 2.34225 16.0882 2.7585C16.4907 3.13342 16.8022 3.58694 17.001 4.0875C17.1965 4.56525 17.3295 5.10975 17.3691 5.9085C17.4063 6.708 17.4166 6.96225 17.4166 9C17.4166 11.0378 17.4087 11.292 17.3691 12.0915C17.3295 12.8903 17.1965 13.434 17.001 13.9125C16.8028 14.4133 16.4912 14.867 16.0882 15.2415C15.6923 15.6227 15.2136 15.9178 14.6853 16.1063C14.181 16.2915 13.6063 16.4175 12.7632 16.455C11.9193 16.4903 11.6509 16.5 9.49992 16.5C7.34896 16.5 7.08059 16.4925 6.23667 16.455C5.39354 16.4175 4.81959 16.2915 4.3145 16.1063C3.78593 15.9184 3.30713 15.6232 2.91167 15.2415C2.50903 14.8666 2.19753 14.4131 1.99888 13.9125C1.80254 13.4347 1.67034 12.8903 1.63075 12.0915C1.59354 11.292 1.58325 11.0378 1.58325 9C1.58325 6.96225 1.59117 6.708 1.63075 5.9085C1.67034 5.109 1.80254 4.566 1.99888 4.0875C2.19698 3.58663 2.50855 3.13299 2.91167 2.7585C3.30724 2.37692 3.78601 2.0818 4.3145 1.89375C4.81959 1.70775 5.39275 1.5825 6.23667 1.545C7.08059 1.50975 7.34896 1.5 9.49992 1.5ZM9.49992 5.25C8.4501 5.25 7.44329 5.64509 6.70095 6.34835C5.95862 7.05161 5.54159 8.00544 5.54158 9C5.54159 9.99456 5.95862 10.9484 6.70095 11.6517C7.44329 12.3549 8.4501 12.75 9.49992 12.75C10.5497 12.75 11.5566 12.3549 12.2989 11.6517C13.0412 10.9484 13.4583 9.99456 13.4583 9C13.4583 8.00544 13.0412 7.05161 12.2989 6.34835C11.5566 5.64509 10.5497 5.25 9.49992 5.25ZM14.6458 5.0625C14.6458 4.81386 14.5415 4.5754 14.3559 4.39959C14.1703 4.22377 13.9186 4.125 13.6562 4.125C13.3937 4.125 13.142 4.22377 12.9564 4.39959C12.7708 4.5754 12.6666 4.81386 12.6666 5.0625C12.6666 5.31114 12.7708 5.5496 12.9564 5.72541C13.142 5.90123 13.3937 6 13.6562 6C13.9186 6 14.1703 5.90123 14.3559 5.72541C14.5415 5.5496 14.6458 5.31114 14.6458 5.0625ZM9.49992 6.75C10.1298 6.75 10.7339 6.98705 11.1793 7.40901C11.6247 7.83097 11.8749 8.40326 11.8749 9C11.8749 9.59674 11.6247 10.169 11.1793 10.591C10.7339 11.0129 10.1298 11.25 9.49992 11.25C8.87003 11.25 8.26594 11.0129 7.82054 10.591C7.37514 10.169 7.12492 9.59674 7.12492 9C7.12492 8.40326 7.37514 7.83097 7.82054 7.40901C8.26594 6.98705 8.87003 6.75 9.49992 6.75Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14_63">
                        <rect width="19" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/okcuptowncleaning"
                  className="facebook"
                   target="_blank"
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_14_66)">
                      <path
                        d="M11.0837 10.1251H13.0628L13.8545 7.12511H11.0837V5.62511C11.0837 4.85261 11.0837 4.12511 12.667 4.12511H13.8545V1.60511C13.5964 1.57286 12.6219 1.50011 11.5927 1.50011C9.44333 1.50011 7.91699 2.74286 7.91699 5.02511V7.12511H5.54199V10.1251H7.91699V16.5001H11.0837V10.1251Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14_66">
                        <rect width="19" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/okc-uptown-cleaning-llc/"
                  className="linkedin"
                   target="_blank"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_14_57)">
                      <path
                        d="M5.20508 3.75C5.20488 4.14783 5.04665 4.52928 4.76521 4.81044C4.48376 5.09161 4.10215 5.24945 3.70433 5.24925C3.3065 5.24905 2.92505 5.09083 2.64389 4.80938C2.36272 4.52794 2.20488 4.14633 2.20508 3.7485C2.20528 3.35068 2.3635 2.96923 2.64495 2.68806C2.92639 2.4069 3.308 2.24905 3.70583 2.24925C4.10365 2.24945 4.48511 2.40768 4.76627 2.68912C5.04743 2.97057 5.20528 3.35218 5.20508 3.75ZM5.25008 6.36H2.25008V15.75H5.25008V6.36ZM9.99008 6.36H7.00508V15.75H9.96008V10.8225C9.96008 8.0775 13.5376 7.8225 13.5376 10.8225V15.75H16.5001V9.8025C16.5001 5.175 11.2051 5.3475 9.96008 7.62L9.99008 6.36Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14_57">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="https://twitter.com/okc_uptown" className="twitter"  target="_blank">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_14_60)">
                      <path
                        d="M17.5447 4.24195C16.9404 4.49522 16.2994 4.66155 15.6432 4.73545C16.3349 4.34352 16.8526 3.72671 17.0998 2.99994C16.4507 3.36594 15.739 3.62244 14.9972 3.76119C14.4989 3.25613 13.8384 2.92117 13.1185 2.80838C12.3986 2.6956 11.6594 2.81131 11.0161 3.13753C10.3727 3.46376 9.86114 3.98221 9.56088 4.61229C9.26062 5.24237 9.1885 5.94878 9.35574 6.6217C8.03929 6.55919 6.75142 6.23509 5.57576 5.67044C4.4001 5.1058 3.36293 4.31323 2.53158 3.3442C2.23731 3.82303 2.08267 4.36736 2.08349 4.92144C2.08349 6.00894 2.66774 6.9697 3.55599 7.5322C3.03034 7.51652 2.51625 7.38203 2.05658 7.13995V7.17894C2.05674 7.90322 2.32129 8.60516 2.80537 9.16574C3.28946 9.72632 3.96329 10.1111 4.71262 10.2547C4.22465 10.38 3.71299 10.3984 3.21637 10.3087C3.42764 10.9321 3.83942 11.4773 4.39405 11.868C4.94868 12.2587 5.61839 12.4753 6.30941 12.4874C5.62263 12.9984 4.83626 13.3762 3.99528 13.5991C3.15429 13.822 2.27518 13.8856 1.4082 13.7864C2.92163 14.7085 4.6834 15.198 6.48279 15.1964C12.5731 15.1964 15.9036 10.4167 15.9036 6.27145C15.9036 6.13645 15.8997 5.99994 15.8933 5.86645C16.5416 5.42257 17.1011 4.87271 17.5455 4.24269L17.5447 4.24195Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14_60">
                        <rect width="19" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 info align-items-center">
                <span >
                  <a href="mailto:okcuptowncleaning@gmail.com" style={{display :"flex"}}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16.5C11.2252 16.5 10.4503 16.2458 9.78938 15.7308L0 8.11875V18.75C0 19.9922 1.00734 21 2.25 21H21.75C22.9927 21 24 19.9927 24 18.75V8.11875L14.2125 15.7359C13.5516 16.2469 12.7734 16.5 12 16.5ZM0.763594 6.81094L10.7105 14.55C11.4694 15.1406 12.5325 15.1406 13.2914 14.55L23.2383 6.81094C23.6766 6.43594 24 5.85938 24 5.25C24 4.00734 22.9922 3 21.75 3H2.25C1.00734 3 0 4.00734 0 5.25C0 5.85938 0.281719 6.43594 0.763594 6.81094Z"
                        fill="white"
                      />
                    </svg>
                    okcuptowncleaning@gmail.com
                  </a>
                </span>
                <span>
                  <a href="tel:405-882-2863" style={{display :"flex"}}>
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 16.5667C14.6 16.9333 14.1333 17.1667 13.6 17.2667C13.5 17.3 13.3667 17.3 13.2667 17.3C13.2333 17.3 13.1667 17.3 13.0667 17.3H12.9C9.76666 17.4 6.73332 16.2667 4.36666 14.0333C1.73332 11.5667 0.166659 8 0.0333252 4.26667C0.0333252 4.16667 0.0333252 4.06667 0.0333252 4.00001C0.0333252 3.96667 0.0333252 3.93334 0.0333252 3.90001C0.0333252 3.80001 0.0333252 3.70001 0.0333252 3.56667V3.53334C0.133325 1.93334 1.33333 0.700005 2.79999 0.666672C2.99999 0.666672 3.19999 0.666672 3.36666 0.700005C3.63332 0.766672 3.89999 0.866672 4.16666 1.00001L4.99999 5.86667C4.56666 6.4 3.96666 6.76667 3.33332 6.86667C3.33332 6.86667 3.33333 6.86667 3.29999 6.86667C3.29999 6.86667 3.29999 6.86667 3.26666 6.86667C3.26666 6.86667 3.23333 6.86667 3.23333 6.90001C3.19999 6.90001 3.19999 6.93334 3.16666 6.93334C3.13332 6.93334 3.13333 6.96667 3.13333 6.96667L3.09999 7.00001C3.09999 7.03334 3.06666 7.03334 3.06666 7.06667C3.06666 7.10001 3.06666 7.10001 3.03332 7.13334C3.03332 7.16667 3.03332 7.16667 3.03332 7.2V7.23334C3.03332 7.23334 3.03332 7.23334 3.03332 7.26667C3.03332 7.26667 3.03332 7.26667 3.03332 7.30001C4.13332 10.6667 6.66666 13.2333 9.86666 14.1667H9.89999C9.89999 14.1667 9.89999 14.1667 9.93332 14.1667H9.96666C9.99999 14.1667 10.0333 14.1667 10.0667 14.1333C10.0667 14.1333 10.1 14.1333 10.1 14.1C10.1333 14.1 10.1333 14.0667 10.1667 14.0667L10.2 14.0333C10.2 14 10.2333 14 10.2333 13.9667C10.2333 13.9667 10.2333 13.9333 10.2667 13.9333V13.9V13.8667V13.8333C10.3333 13.1333 10.6333 12.4667 11.1 11.9333L15.6 12.5667C15.7333 12.8 15.8333 13.0667 15.9 13.3333V13.3667C15.9333 13.5 15.9667 13.6667 15.9667 13.8C15.9667 13.8667 15.9667 13.9333 15.9667 14C16.0333 15.0667 15.6333 15.9667 15 16.5667Z"
                        fill="white"
                      />
                    </svg>
                    405-882-2863
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1 d-flex align-items-center justify-content-start">
                <a href="/">
                  <img
                    src={require("../../Assets/img/logo.png")}
                    alt=""
                    className="logo"
                  />
                </a>
              </div>

              <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10 d-flex align-items-center justify-content-center">
                <ul className="menu">
                  <li className="menuList">
                    <a href="/">Home</a>
                  </li>
                  <li className="menuList">
                    <a href="/about">About Us</a>
                  </li>
                  {/* <li className="menuList"><a href="/Why-choose-us">Why Choose Us</a></li> */}
                  <li className="openMenu menuList">
                    Service
                    <div className="megaMenu d-flex">
                      <img
                        src={require("../../Assets/img/megamenuimg.jpg")}
                        alt=""
                      />
                      <div
                        className="d-flex"
                        style={{ background: "#e2f0e7", paddingRight: "20px" }}
                      >
                        <ul>
                          <li>
                            <a href="/services/power-washing">
                              <img
                                src={require("../../Assets/img/power-washing.png")}
                                alt=""
                              />
                              Power Washing
                            </a>
                          </li>
                          <li>
                            <a href="/services/chandelier-cleaning">
                              <img
                                src={require("../../Assets/img/chandelier.png")}
                                alt=""
                              />
                              Chandelier Cleaning
                            </a>
                          </li>
                          <li>
                            <a href="/services/deep-cleaning">
                              <img
                                src={require("../../Assets/img/cleaning.png")}
                                alt=""
                              />
                              Deep Cleaning
                            </a>
                          </li>
                          <li>
                            <a href="/services/commercial-carpet-cleaning">
                              <img
                                src={require("../../Assets/img/carpet.png")}
                                alt=""
                              />
                              Commercial Carpet Cleaning
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="/services/basic-cleaning">
                              <img
                                src={require("../../Assets/img/cleaning.png")}
                                alt=""
                              />
                              Basic Cleaning
                            </a>
                          </li>
                          <li>
                            <a href="/services/remodel-cleanup">
                              <img
                                src={require("../../Assets/img/cleaning-service.png")}
                                alt=""
                              />
                              Remodel Cleanup
                            </a>
                          </li>
                        </ul>
                      </div>

                      <ul className="abtintro">
                        <li>
                          <div>7+ Years</div>
                          <div>Experience</div>
                        </li>
                        <li>
                          <div>20+ </div>
                          <div>Country Served</div>
                        </li>
                        <li>
                          <div>1000+ </div>
                          <div>Satified Customers</div>
                        </li>
                        <li>
                          <div>160+ </div>
                          <div>Trained Staff</div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menuList">
                    <a href="/contact-us">Contact Us</a>
                  </li>
                  <li className="menuList">
                    <a href="/ethical-sourcing">Ethical sourcing</a>
                  </li>
                  <li className="menuList">
                    <a href="/pricing">Pricing</a>
                  </li>
                </ul>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1 d-flex align-items-center justify-content-end">
                <button
                  className="quotesbutton"
                  onClick={() => setopenPopup(!openPopup)}
                >
                  Get A Quotes
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="main-header-mobile">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  src={require("../../Assets/img/logo.png")}
                  alt=""
                  className="logo"
                />
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setopenMenu(!openMenu)}
                >
                  <rect y="7" width="23" height="2" rx="1" fill="black" />
                  <rect
                    x="4"
                    y="14"
                    width="19"
                    height="2"
                    rx="1"
                    fill="black"
                  />
                  <rect width="15" height="2" rx="1" fill="black" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </header>
      <div
        className="mobilemenu"
        style={{ display: openMenu ? "block" : "none" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setopenMenu(!openMenu)}
        >
          <path
            d="M2 2L24.6411 24.6411"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M2.68115 25.3206L25.3222 2.67948"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <img
          src={require("../../Assets/img/logo.png")}
          alt=""
          width={"50px"}
          style={{ paddingBottom: "10px" }}
        />

        <h4>OKC Uptown</h4>
        <br />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/why-choose-us">Why Choose Us</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
          <li>
            <a href="/ethical-sourcing">Ethical sourcing</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          {/* <li><a href="#">Get a Quotes</a></li> */}
        </ul>
      </div>

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

export default Header;
