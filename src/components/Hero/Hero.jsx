import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className="bg-black/1 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              LET'S EXPLORE THE UNIVERSE
            </h1>
            <p data-aos="fade-down" data-aos-delay="300">
              The universe is all of space and time and their contents. It comprises all of existence, any fundamental interaction, physical process and physical constant, and therefore all forms of energy and matter, and the structures they form, from sub-atomic particles to entire galaxies.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-blue-400 text-white hover:bg-blue-700 px-6 py-2 rounded-md cursor-pointer transition-colors duration-300"
            >
              LEARN MORE
            </button>

          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-20 z-10"
      />

      <div className="absolute bottom-0 z-10 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
