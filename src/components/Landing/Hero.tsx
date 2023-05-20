import { useState } from "react";
import { HeroData } from "../constants/LandingConstants";
import MapIcon from "../icons/MapIcon";

const Hero = () => {
  const [title] = useState(HeroData().title.split(" "));

  return (
    <section className="overflow-hidden items-center w-full left-0 flex justify-center pt-3 my-24">
      <div className="absolute bg-searchart-button h-[328px] w-full dark:bg-searchart-dark-button"></div>
      <MapIcon className="absolute fill-white dark:fill-searchart-dark-alternative mt-3" />
      <div className="relative py-14 z-10 flex flex-col gap-8 justify-center items-center">
        <h1 className="font-normal text-xl lg:text-2xl xl:text-3xl">
          {title.slice(0, 2).join(" ")}{" "}
          <span className="inline-block bg-gradient-to-b from-[#FF3C00] to-[#781E03] bg-clip-text text-transparent font-medium">
            {title[2]}
          </span>{" "}
          {title[title.length - 1]}
        </h1>
        <p className="text-sm lg:text-lg xl:text-xl font-semibold text-center">
          {HeroData().content}
        </p>
      </div>
    </section>
  );
};

export default Hero;
