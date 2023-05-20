import { useState } from "react";
import ToggleDarkMode from "../components/ToggleDarkMode";
import { Link } from "react-router-dom";
import Logo from "../assets/logo(light).svg";
import NavBarMobile from "./NavBarMobile";

export interface IWebMenu {
  links: { text: string; path: string }[];
}
export function WebMenu({ links }: IWebMenu) {
  return (
    <div className="flex gap-2">
      {links.map(({ text, path }, index) => {
        return (
          <Link key={index} to={path} className="group overflow-hidden">
            {text}
          </Link>
        );
      })}
    </div>
  );
}

const Navbar = () => {
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
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="hidden xl:flex items-center justify-between py-20 gap-2 ">
        <img src={Logo} alt="logo" />
        <WebMenu links={links} />
        <ToggleDarkMode />
        <div className="flex gap-3">
          <button className="px-12 py-2 rounded-lg border border-gray-200">
            Sign in
          </button>
          <button className="px-12 py-2 bg-black rounded-lg text-white">
            Sign up
          </button>
        </div>
      </div>
      <div className="flex justify-between  xl:hidden py-12 px-10">
        <img src={Logo} alt="logo" />
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {open ? (
          <NavBarMobile close={() => setOpen(false)} links={links} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
