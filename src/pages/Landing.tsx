import { Fragment } from "react";
import Hero from "../components/Landing/Hero";
import Navbar from "../layout/Navbar";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />

      <Hero />
    </Fragment>
  );
};

export default Landing;
