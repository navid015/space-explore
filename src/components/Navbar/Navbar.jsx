import React, { useState } from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="relative flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-3xl font-serif z-10 relative">
              <img src={Logo} alt="" className="w-18 h-20" />
              <span>MYSTERY OF SPACE</span>
            </div>
            <div className="text-white sm:hidden">
              <button onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="text-white hidden sm:block z-10">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="#">Solar System</a>
                </li>
                <li>
                  <a href="#">Galaxy</a>
                </li>
                <li>
                  <a href="#">Planets</a>
                </li>
                <li>
                  <a href="#">Stars</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>


      {isOpen && (
        <div className="absolute top-28 right-0 left-60 py-4 bg-black/80 z-[10]">
          <ul className="text-sky-300 font-bold text-lg text-right mr-3">
            <li>
              <a href="#">Solar System</a>
            </li>
            <li>
              <a href="#">Galaxy</a>
            </li>
            <li>
              <a href="#">Planets</a>
            </li>
            <li>
              <a href="#">Stars</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
