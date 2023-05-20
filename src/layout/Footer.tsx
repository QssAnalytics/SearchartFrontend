import React from "react";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const links = [
    {
      text: "Policy area",
      path: "/policyarea",
    },
    {
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      text: "Subscription",
      path: "/aboutus",
    },
    {
      text: "About us",
      path: "/aboutus",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center py-8 gap-10 text-gray-400">
      <div className="flex gap-5">
        {links.map(({ text, path }, index) => {
          return (
            <Link key={index} to={path}>
              {text}
            </Link>
          );
        })}
      </div>

      <div className="flex gap-5">
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
        <img src={Linkedin} alt="linkedin" />
      </div>
      <div className="flex gap-3 ">
        <span> Copyright © 2023</span>
        <span>Privacy and policy </span>
        <span> Searchart </span>
      </div>
    </div>
  );
};

export default Footer;
