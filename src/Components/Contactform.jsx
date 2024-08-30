import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-green-600">
      <main className=" !container mx-auto !px-5 md:px-0 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start  gap-8 md:gap-20">
          <div className=" md:w-7/12 mb-8 md:mb-0">
            <h3 className="text-lg md:text-xl lg:text-2xl text-white">
              Get in touch
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to Elevate Your <br /> Workspace?
            </h2>
            <p className="text-white">
              Contact us today to learn more about how OKC Uptown Cleaning
              Services can help keep your office clean and healthy. Whether you
              need daily janitorial services or a one-time deep clean, we have
              the expertise to meet your needs.
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
        </div>
      </main>
    </section>
  );
};

export default ContactForm;
