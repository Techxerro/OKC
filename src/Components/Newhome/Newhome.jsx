import React from "react";
import Newhomepage from "../Newhomepage";
import Reviewsection from "../Reviewsection";
import HowWeWork from "../Howwework";
import ContactForm from "../Contactform";
import Testimonials from "../Testimonials";
import WhoWeServe from "../Whoweserve";
import Aboutus from "../Aboutus";
import Header from "../Header/Header";
import ConsultancySection from "../ConsultancySection";

function Newhome() {
  return (
    <>
      <Header />
      <Newhomepage />
      <WhoWeServe />
      <Reviewsection />
      <Testimonials />
      <Aboutus />
      <HowWeWork />
      <ContactForm />
      <ConsultancySection />
    </>
  );
}

export default Newhome;
