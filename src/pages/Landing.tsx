import { Fragment } from "react";
import Hero from "../components/Landing/Hero";
import Navbar from "../layout/Navbar";
import About from "../components/Landing/About";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />

      <Hero />

      <About />
    </Fragment>
  );
};

export default Landing;
