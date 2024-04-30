import React from "react";
import satelitImg from "../../assets/satelite2.jpg";


const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-sky-800 uppercase"
              >
                Mission Mars
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="uppercase text-5xl"
              >
                journey to mars
              </h1>
              <p data-aos="fade-up" data-aos-delay="100">
                Human landing on Mars marks a monumental leap in space exploration, promising profound scientific insights and potential colonization. It represents the pinnacle of human ingenuity, courage, and collaborative effort. From technological advancements to physiological challenges, the endeavor pushes the boundaries of human achievement, inspiring future generations and fostering international cooperation toward unraveling the mysteries of the cosmos.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-blue-400 text-white hover:text-sky-800, hover:text-black hover:font-bold px-4 py-1 rounded-md duration-200"
              >
                View Details
              </button>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100">
              <img
                src={satelitImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>

      </section>

    </>
  );
};

export default Rapidscat;
