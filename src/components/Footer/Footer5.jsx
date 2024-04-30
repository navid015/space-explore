import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-primary">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className=" grid md:grid-cols-3 py-5">
          {/* first column */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p className="text-gray-400">
              Get exclusive{" "}
              <span className=" text-white font-bold "> best update</span>{" "}
              straight to your inbox.{" "}
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2 "
                type="text"
                placeholder="Email"
              />
              <button className="bg-orange-500 hover:bg-orange-500/75 h-full inline-block py-2 px-6 text-white">
                Ok
              </button>
            </div>
          </div>
          {/* Second column */}

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3 `}>
                  <li> <a href='https://www.nasa.gov/' target="_blank" rel="noopener noreferrer" className="cursor-pointer">NASA</a></li>
                  <li> <a href='https://www.space.com/' target="_blank" rel="noopener noreferrer" className="cursor-pointer">Space.com</a></li>
                  <li> <a href='https://earth.esa.int/eogateway/missions/envisat' target="_blank" rel="noopener noreferrer" className="cursor-pointer">EnviSat</a></li>
                  <li> <a href='https://www.universetoday.com/' target="_blank" rel="noopener noreferrer" className="cursor-pointer">Universe Today</a></li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  <li> <a href='https://science.nasa.gov/solar-system/' target="_blank" rel="noopener noreferrer" className="cursor-pointer">Solar System</a></li>
                  <li> <a href='https://en.wikipedia.org/wiki/Galaxy' target="_blank" rel="noopener noreferrer" className="cursor-pointer">Galaxy</a></li>
                  <li> <a href='https://science.nasa.gov/solar-system/planets/' target="_blank" rel="noopener noreferrer" className="cursor-pointer">Planets</a></li>
                  <li> <a href='https://science.nasa.gov/universe/stars/' target="_blank" rel="noopener noreferrer" className="cursor-pointer">Stars</a></li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact Me
                </h1>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <HiLocationMarker />
                    <p>Lafayette, Louisiana</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdMessage />
                    <p>ny_uuu@hotmail.com</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdCall />
                    <p>+1 (337)-***-****</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
            <span className="text-sm text-gray-400">
              @copyright 2024 navid yousuf
            </span>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="https://www.instagram.com/navid_yousuf/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="https://www.facebook.com/navid.yousuf/"target="_blank" rel="noopener noreferrer" >
                <FaFacebook className="text-4xl" />
              </a>
              <a href="https://www.linkedin.com/in/navid-yousuf-2455756a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>

            <span className="text-sm text-gray-400 ">
              <ul className="flex gap-3">
                <li className="hover:text-white">Privacy Policy</li>
                <li className="hover:text-white">Terms & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
