import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="zoom-in-down"
        className="flex items-center absolute top-0 right-0 w-full h-[80px] z-1 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="gap-8 text-white font-bold text-2xl">
              <img src={Logo} alt="" className="w-10" />
              
            </div>
            <div className="text-4xl text-white font-extrabold ml-80">
              <h1>TRAVEL THROUGH SPACE</h1>
              </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="#">Solar System</a>
                </li>
                <li>
                  <a href="#">Galaxy</a>
                </li>
                <li>
                  <a href="#">Planet</a>
                </li>
                <li>
                  <a href="#">Stars</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
