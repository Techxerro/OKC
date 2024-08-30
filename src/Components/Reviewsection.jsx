import React from "react";
import review1 from "../../src/Assets/img/review (1).png";
import review2 from "../../src/Assets/img/review (2).png";
import review3 from "../../src/Assets/img/review (3).png";
import review4 from "../../src/Assets/img/review (4).png";

function Reviewsection() {
  return (
    <div className="bg-[#1B8842] py-8">
      <div className="!container mx-auto flex flex-col lg:flex-row justify-center items-center gap-[20px] md:gap-20 ">
        <div className="flex items-center bg-white p-2 rounded-full ">
          <img
            src={review1} // Replace with the actual image path
            alt="ThreeBestRated"
            className="w-32 h-32"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:space-x-8 space">
          <div className="bg-white p-[20px] rounded-lg shadow-lg flex flex-col items-center justify-center w-[270px] h-32">
            <img
              src={review4} // Replace with the actual image path
              alt="Google"
              className="w-auto h-auto "
            />
            <p className="text-lg font-semibold !mb-0">4.9 ⭐⭐⭐⭐⭐</p>
            <p className="text-gray-600 !mb-0">250+ Reviews</p>
          </div>
          <div className="bg-white p-[20px] rounded-lg shadow-lg flex flex-col items-center justify-center w-[270px] h-32">
            <img
              src={review3} // Replace with the actual image path
              alt="Facebook"
              className="w-auto h-auto "
            />
            <p className="text-lg font-semibold !mb-0">4.9 ⭐⭐⭐⭐⭐</p>
            <p className="text-gray-600 !mb-0">200+ Reviews</p>
          </div>
          <div className="bg-white p-[20px] rounded-lg shadow-lg flex flex-col items-center justify-center w-[270px] h-32">
            <img
              src={review2} // Replace with the actual image path
              alt="Yelp"
              className="w-auto h-auto "
            />
            <p className="text-lg font-semibold !mb-0">5.0 ⭐⭐⭐⭐⭐</p>
            <p className="text-gray-600 !mb-0">130+ Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviewsection;
