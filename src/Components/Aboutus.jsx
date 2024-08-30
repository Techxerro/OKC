import React from "react";
import cleaningImage1 from "../../src/Assets/img/Rectangle 78.png";
import cleaningImage2 from "../../src/Assets/img/Rectangle 79.png";
import nine from "../../src/Assets/img/nine.png";

const AboutUs = () => {
  return (
    <div className="bg-[#1B8842] bg-opacity-20 py-12 md:py-24 !px-5 md:px-0">
      <div className="!container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col ">
            <h2 className="!mb-5 text-2xl md:text-4xl lg:text-5xl xl:text-[55px] font-bold lg:leading-[65px]">
              About Us
            </h2>
            <p className=" text-sm md:text-base lg:text-lg   mb-[24px]">
              With over 700 successful projects under our belt, OKC Uptown
              Cleaning has earned a reputation for delivering outstanding
              results. Our track record speaks for itself, as we consistently
              exceed our clients' expectations and leave their spaces looking
              immaculate. Join the growing list of satisfied customers who have
              experienced the OKC Uptown Cleaning difference.
            </p>
            <a
              href="#"
              className="bg-[#158842] text-white px-6 py-3  text-lg  hover:bg-green-700 self-start "
            >
              KNOW MORE
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={cleaningImage1}
              alt="Cleaning in progress"
              className="  object-cover h-full"
            />
            <div className="flex flex-col justify-between">
              <img src={nine} alt="Cleaning tools" className="" />
              <img
                src={cleaningImage2}
                alt="Cleaning tools"
                className="  object-cover  lg:h-64 xl:h-72"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
