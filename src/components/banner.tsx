import React from 'react';
import bannerImage from "../assets/banner-stack.png";



const Banner = () => {
    return (
    <section className="bg-white">
      <div className="container mx-auto px-4">

        <div className="min-h-[520px] flex flex-col md:flex-row items-center justify-between py-16 gap-10">

          <div className="w-full md:w-1/2">

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#172554]">
              Build Your Ideal
              <br />

              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-gray-500 leading-relaxed">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            <div className="flex items-center gap-3 mt-7">

              <a
                href="#technologies"
                className="px-5 py-3 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 transition"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="px-5 py-3 rounded-lg text-sm font-medium text-gray-600 border border-gray-200 hover:border-pink-500 hover:text-pink-500 transition"
              >
                Learn More
              </a>

            </div>

          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">

            <img
              src={bannerImage}
              alt="Development Stack"
              className="w-[300px] md:w-[420px] lg:w-[480px] object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};


export default Banner;