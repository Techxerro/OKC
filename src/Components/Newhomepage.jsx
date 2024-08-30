import React from "react";
import bg1 from "../../src/Assets/img/Banner1.png";

function Newhomepage() {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <main
        className="flex flex-col md:flex-row !container mx-auto items-center !px-5 md:px-0"
        style={{}}
      >
        <div className="flex md:w-7/12 flex-col justify-center h-full p-8 space-y-2 md:space-y-5 ">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-[55px] font-bold lg:leading-[65px]">
            Professional Cleaning <br /> Services in Oklahoma
          </h1>
          <p className="text-white ">
            Trusted, Reliable, and Affordable Cleaning Solutions for Corporate
            or Residential.
          </p>
        </div>
        <div className="bg-white px-8 py-10 rounded-[20px] shadow-lg max-w-sm  md:w-5/12 ">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm md:text-base lg:text-lg  mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm md:text-base lg:text-lg  mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm md:text-base lg:text-lg  mb-2"
                htmlFor="phone"
              >
                Phone number
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Phone number"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-[#158842] hover:bg-green-400 text-white  py-[20px] px-4  focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Get a Free Quote
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Newhomepage;
