import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import BgVideo from "./assets/earth-bg.mp4";
import wave from "./assets/wave Gif.gif";
import Rapidscat from "./components/Rapidscat/Rapidscat.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="">
      
      {!videoLoaded && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-md z-50 flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      )}
      <div className="h-[700px] relative">
        {/* Video with event listener to handle loaded event */}
        <video
          autoPlay
          loop
          muted
          onLoadedData={handleVideoLoaded}
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <HeroCard />
      <Rapidscat />
      <Satelite />
      <Footer />
      <Footer5 />
    </div>
  );
};

export default App;
