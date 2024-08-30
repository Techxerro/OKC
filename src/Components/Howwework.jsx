import React from "react";
import work1 from "../../src/Assets/img/Group 164.png";
import work2 from "../../src/Assets/img/Group 165.png";
import work3 from "../../src/Assets/img/Group 166.png";
import work4 from "../../src/Assets/img/Group 167.png";

const HowWeWork = () => {
  const steps = [
    {
      title: "Consultation",
      description:
        "We start with a thorough consultation to understand your needs and expectations.",
      img: work1, // You can replace this with an appropriate icon or image
    },
    {
      title: "Customized Plan",
      description:
        "Based on our discussion, we develop a cleaning plan tailored to your office's unique requirements.",
      img: work2,
    },
    {
      title: "Execution",
      description:
        "Our professional team carries out the cleaning services with precision, ensuring every corner of your office is spotless.",
      img: work3,
    },
    {
      title: "Ongoing Support",
      description:
        "We provide continuous support and adjustments as needed to ensure ongoing satisfaction.",
      img: work4,
    },
  ];

  return (
    <div className="py-24  md:py-12 ">
      <div className="!container mx-auto px-5  md:px-0">
        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-[55px] font-bold lg:leading-[65px] text-center  md:mb-8">
          <span className="text-[#158842]">How </span>
          we work?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 md:pt-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <img src={step.img} alt="" className="h-28 w-28" />
              </div>

              <h3 className="text-xl font-semibold text-[#158842] mb-2">
                {step.title}
              </h3>
              <p className="">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
