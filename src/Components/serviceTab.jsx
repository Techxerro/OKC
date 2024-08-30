import React, { useState } from "react";
import Deepcleaningimg from "../Assets/img/Rectangle 44.png";
import basiccleaning from "../Assets/img/basiccleaning.webp";
import commercialcleaning from "../Assets/img/commercialcleaning.jpg";
import remodelcleaning from "../Assets/img/remodelcleaning.jpeg";
import chandeliercleaning from "../Assets/img/chandeliercleaning.jpg";
import powerwashing from "../Assets/img/powerwashing.jpg";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-12 col-12">
        <div className="tab-contain">
          <h3>Categories</h3>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${index === activeTab ? "active-tab" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0.5L6 5.5L1 10.5" stroke="black" />
                <path d="M1 0.5L6 5.5L1 10.5" stroke="black" />
              </svg>
            </div>
          ))}
        </div>
        <div className="greenbox" data-aos="fade-down">
          <h3>
            Keep everything <br />
            clean with us
          </h3>
          <button>Book Now</button>
        </div>
      </div>

      <div className="col-xl-8 col-lg-8 col-md-12 col-12 tab-content">
        {tabs[activeTab].content}
      </div>
    </>
  );
};

const App = () => {
  const tabs = [
    {
      label: "Deep cleaning",
      content: [
        <img src={Deepcleaningimg} alt="" />,
        <h2>
          <span>Deep Cleaning</span> - Experience the Ultimate Clean
        </h2>,
        <h3>
          <span>Our deep cleaning </span>service goes beyond the surface,
          providing a comprehensive solution for a deeply sanitized space.
        </h3>,
        <b>Four essential steps in our deep cleaning process include:</b>,
        <ol>
          <li>
            <b>Assessment and Planning:</b> We begin by assessing your space to
            understand your specific needs, and creating a customized cleaning
            plan.
          </li>
          <li>
            <b>Thorough Cleaning and Sanitization:</b> Our team meticulously
            cleans and sanitizes high-touch areas, eliminating germs and
            bacteria to ensure a healthier environment.
          </li>
          <li>
            <b>Detail-Oriented Cleaning:</b> We pay close attention to often
            overlooked areas, leaving no trace of dust, grime, or debris behind.
          </li>
          <li>
            <b>Eco-Friendly Approach: </b> We use environmentally friendly
            cleaning products and methods to ensure both the health of your
            space and the planet.
          </li>
        </ol>,

        <button className="greenbtn">Book Now</button>,
      ],
    },

    {
      label: "Basic cleaning",
      content: [
        <img src={basiccleaning} alt="" />,
        <h2>
          <span>Basic Cleaning</span> - Efficient and Reliable Clean
        </h2>,

        <b>
          Our basic cleaning service is designed for regular upkeep, providing
          consistent cleanliness for your space. Four fundamental steps in our
          basic cleaning process include:
        </b>,
        <ol>
          <li>
            <b>Scheduled Maintenance:</b> We establish regular cleaning
            schedules, ensuring your space remains tidy and presentable on an
            ongoing basis.
          </li>
          <li>
            <b>Surface Cleaning :</b>Our team focuses on wiping, dusting, and
            vacuuming to maintain a clean and welcoming environment.
          </li>
          <li>
            <b>Competitive Pricing:</b>We offer affordable rates for this
            essential yet effective cleaning service.
          </li>
          <li>
            <b>Customer-Centric Approach: </b>Our commitment to meeting your
            basic cleaning needs ensures that your space is always ready for
            use.
          </li>
        </ol>,

        <button className="greenbtn">Book Now</button>,
      ],
    },

    {
      label: "Commercial cleaning",
      content: [
        <img src={commercialcleaning} alt="" />,
        <h2>
          <span>Commercial Cleaning</span> - Elevate Your Business Environment
        </h2>,
        <b>
          Our commercial cleaning service is tailored to meet the unique
          requirements of businesses. Four essential steps in our commercial
          cleaning process include:
        </b>,
        <ol>
          <li>
            <b>Initial Consultation:</b> We begin with a consultation to
            understand your specific business cleaning needs and create a
            customized plan.
          </li>
          <li>
            <b>Flexible Scheduling :</b> We work around your business hours to
            minimize disruptions, ensuring a clean and professional image for
            your company.
          </li>
          <li>
            <b>Experienced Team:</b>Our team is well-trained to understand the
            specific demands of commercial spaces, delivering top-quality
            results.
          </li>
          <li>
            <b>Quality Assurance: </b>Our commitment to delivering consistent,
            high-quality results creates a hygienic and appealing atmosphere for
            your business.{" "}
          </li>
        </ol>,

        <button className="greenbtn">Book Now</button>,
      ],
    },

    {
      label: "Remodel clean up",
      content: [
        <img src={remodelcleaning} alt="" />,
        <h2>
          <span>Remodel clean up</span> - Post-Renovation Cleaning Made Easy
        </h2>,

        <b>
          Our remodel clean-up service takes the hassle out of cleaning up after
          construction or renovations. Four essential steps in our remodel
          clean-up process include:
        </b>,
        <ol>
          <li>
            <b>Construction Debris Removal:</b>We start by clearing away
            construction dust, debris, and materials left behind after the
            renovation.
          </li>
          <li>
            <b>Thorough Cleaning :</b>Our team performs a detailed cleaning to
            restore your space to its pre-renovation condition.
          </li>
          <li>
            <b>Flexible Scheduling:</b>We accommodate your project timelines to
            ensure a clean and safe environment.
          </li>
          <li>
            <b>Skilled Team: </b>Our experienced team is equipped to handle the
            unique challenges of post-renovation cleaning, ensuring a pristine
            space.
          </li>
        </ol>,

        <button className="greenbtn">Book Now</button>,
      ],
    },

    {
      label: "Chandeliers cleaning",
      content: [
        <img src={chandeliercleaning} alt="" />,
        <h2>
          <span>Chandeliers Cleaning</span> -Illuminate Your Space with Clarity
        </h2>,

        <b>
          Our chandelier cleaning service is dedicated to ensuring your lighting
          fixtures shine brightly. Four essential steps in our chandelier
          cleaning process include:
        </b>,
        <ol>
          <li>
            <b>Careful Inspection: </b>We begin with a close inspection of your
            chandeliers to assess their condition and cleaning requirements
          </li>
          <li>
            <b>Gentle Cleaning:</b> Our specialized team uses gentle yet
            effective cleaning methods to preserve the beauty and integrity of
            your chandeliers.
          </li>
          <li>
            <b>Streak-Free Shine: </b>We guarantee the removal of dust and
            smudges for crystal-clear brilliance.
          </li>
          <li>
            <b>Customized Cleaning Plans:</b> Our solutions are tailored to meet
            the unique requirements of your lighting fixtures, ensuring stunning
            results.
          </li>
        </ol>,

        <button className="greenbtn">Book Now</button>,
      ],
    },
    {
      label: "Power Washing",
      content: [
        <img src={powerwashing} alt="" />,
        <h2>
          <span>Power Washing</span> -Revitalize Your Exterior
        </h2>,
        <b>
          Our power washing service renews the appearance of your property's
          exterior surfaces. Four essential steps in our power washing process
          include:
        </b>,
        <ol>
          <li>
            <b> Surface Assessment:</b> We inspect the surfaces to be cleaned,
            identifying problem areas and specific cleaning requirements.
          </li>
          <li>
            <b> High-Pressure Cleaning:</b> We employ high-pressure water jets
            to effectively remove dirt, grime, and stains from various surfaces.
          </li>
          <li>
            <b> Environmentally Friendly Practices: </b>Our cleaning solutions
            and techniques are eco-friendly, protecting both your property and
            the environment.
          </li>
          <li>
            <b> Instant Curb Appeal: </b>Experience an immediate enhancement in
            your property's appearance with our thorough power wash
          </li>
        </ol>,

        <button className="greenbtn">Book Now</button>,
      ],
    },
  ];

  return <Tab tabs={tabs} />;
};

export default App;
