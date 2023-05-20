import { useState } from "react";
import { HeroData } from "../constants/Landing";
import MapIcon from "../icons/MapIcon";

const Hero = () => {
  const [title] = useState(HeroData.title.split(" "));

  return (
    <section className="bg-searchart-button items-center dark:bg-searchart-dark-button absolute w-full left-0 flex justify-center pt-3 mt-24">
      <MapIcon className="fill-white dark:fill-searchart-dark-alternative" />
      <div className="absolute px-searchart flex flex-col gap-8 justify-center items-center">
        <h1 className="font-normal text-3xl">
          {title.slice(0, 2).join(" ")}{" "}
          <span className=" inline-block bg-gradient-to-b from-[#FF3C00] to-[#781E03] bg-clip-text text-transparent font-medium">
            {title[2]}
          </span>{" "}
          {title[title.length - 1]}
        </h1>
        <p className="text-xl font-semibold text-center">{HeroData.content}</p>
      </div>
    </section>
  );
};

export default Hero;
