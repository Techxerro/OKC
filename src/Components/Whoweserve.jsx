import React from "react";
import pic from "../../src/Assets/img/Group 169.png";
// Dummy data for the icons (Replace with actual images/icons)
const services = [
  { id: 1, name: "Auto Dealerships", icon: "https://via.placeholder.com/50" },
  { id: 2, name: "Hospital", icon: "https://via.placeholder.com/50" },
  { id: 3, name: "Corporate Offices", icon: "https://via.placeholder.com/50" },
  { id: 4, name: "Restaurants", icon: "https://via.placeholder.com/50" },
  {
    id: 5,
    name: "Manufacturing Facilities",
    icon: "https://via.placeholder.com/50",
  },
  {
    id: 6,
    name: "Educational Institutions",
    icon: "https://via.placeholder.com/50",
  },
];

const WhoWeServe = () => {
  return (
    <section className="  !container mx-auto ">
      <div className=" flex flex-col lg:flex-row items-center !py-12   md:!py-28 !px-5 md:px-0">
        {/* Icons */}
        <div className="flex flex-wrap justify-center gap-4 lg:w-1/2 mb-8 lg:mb-0">
          {/* {services.map((service) => (
            <div
              key={service.id}
              className="bg-green-600 p-6 rounded-lg shadow-lg flex items-center justify-center w-24 h-24"
            > */}
          <img
            src={pic}
            // alt={service.name}
            className=""
          />
          {/* </div>
          ))} */}
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 ">
          <h2 className="  !mb-4 text-2xl md:text-4xl lg:text-5xl xl:text-[55px] font-bold lg:leading-[65px]">
            <span className="text-[#158842]">Who </span>we serve
          </h2>
          <p className=" mb-4">
            At OKC, we specialize in delivering tailored cleaning services
            across a wide range of industries. No matter your sector, our team
            ensures your environment remains pristine, safe, and welcoming.
          </p>
          <div className="flex text-base  md:text-lg lg:text-xl">
            <ul className="list-disc list-inside !pl-0">
              <li>Auto Dealerships</li>
              <li>Hospital</li>
              <li>Corporate Offices</li>
              <li>Restaurants</li>
              <li>Manufacturing Facilities</li>
              <li>Educational Institutions</li>
              <li>Retail Stores</li>
            </ul>
            <ul className="list-disc list-inside !pl-0">
              <li>Hospitality Industry</li>
              <li>Industrial Warehouses</li>
              <li>Financial Institutions</li>
              <li>Gyms and Fitness Centers</li>
              <li>And Many more...</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
