import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
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
    <div className="flex flex-col items-center justify-center gap-10 py-8 mt-24 text-searchart-footer-text">
      <div className="flex gap-5">
        {links.map(({ text, path }, index) => {
          return (
            <Link
              key={index}
              to={path}
              className="dark:hover:text-white hover:text-searchart-dark-alternative"
            >
              {text}
            </Link>
          );
        })}
      </div>

      <div className="flex h-full gap-5">
        <Icon
          className="cursor-pointer w-7 h-7 dark:hover:text-white hover:text-searchart-dark-alternative "
          icon="fa:facebook"
        />
        <Icon
          className="w-8 h-8 cursor-pointer dark:hover:text-white hover:text-searchart-dark-alternative"
          icon="ant-design:instagram-filled"
        />
        <Icon
          className="cursor-pointer w-7 h-7 dark:hover:text-white hover:text-searchart-dark-alternative"
          icon="fa:linkedin"
        />
      </div>
      <div className="flex gap-3">
        <span> Copyright © 2023 </span>
        <span> Privacy and policy </span>
        <span> Searchart </span>
      </div>
    </div>
  );
};

export default Footer;
