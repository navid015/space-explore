import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-sky-800 uppercase"
              >
                Mission Moon
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="uppercase text-5xl"
              >
                Journey to Moon
              </h1>
              <p data-aos="fade-up" data-aos-delay="100">
                The Apollo 11 mission, led by Neil Armstrong, Buzz Aldrin, and Michael Collins, marked humanity's historic first landing on the moon on July 20, 1969. Armstrong famously declared, "That's one small step for man, one giant leap for mankind," as he stepped onto the lunar surface. This milestone achievement symbolized the incredible capabilities of human ingenuity, exploration, and determination in reaching beyond Earth's boundaries.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-blue-400 text-white hover:text-sky-800, hover:text-black hover:font-bold px-4 py-1 rounded-md duration-400"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
