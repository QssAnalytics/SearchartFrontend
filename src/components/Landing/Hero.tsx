import { useState } from "react";
import { HeroData } from "../constants/LandingConstants";
import MapIcon from "../icons/MapIcon";

const Hero = () => {
  const [title] = useState(HeroData().title.split(" "));

  return (
    <section className="left-0 flex items-center justify-center w-full pt-3 mb-24 overflow-hidden">
      <div className="absolute bg-searchart-button h-[328px] w-full dark:bg-searchart-dark-button"></div>
      <MapIcon className="absolute mt-3 fill-white dark:fill-searchart-dark-alternative" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 py-14">
        <h1 className="text-xl font-normal lg:text-2xl xl:text-3xl">
          {title.slice(0, 2).join(" ")}{" "}
          <span className="inline-block bg-gradient-to-b from-[#FF3C00] to-[#781E03] bg-clip-text text-transparent font-medium">
            {title[2]}
          </span>{" "}
          {title[title.length - 1]}
        </h1>
        <p className="text-sm font-semibold text-center lg:text-lg xl:text-xl">
          {HeroData().content}
        </p>
      </div>
    </section>
  );
};

export default Hero;
