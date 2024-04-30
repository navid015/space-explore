import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { FaBattleNet } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "UNIVERSE",
    content: "Radius: 46.508 billion light years",
    description:
      "The universe encompasses all space, time, energy, matter, and celestial bodies, revealing the wonders of cosmic evolution and diversity.",
    icon: <FaBattleNet className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "GALAXY",
    content: "Count: Between 100 and 200 billion",
    description:
      "Galaxies are vast collections of stars, dust, and gas held together by gravity, forming distinct cosmic islands in space.",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "PLANET",
    content: "Count: About 2 trillion",
    description:
      "Planets are celestial bodies orbiting stars, lacking their own light source, varying in size, composition, and atmosphere, influencing life.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container pt-0">
          <div className="min-h-[100px]">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-[#4c1d95]/30 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-64 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
