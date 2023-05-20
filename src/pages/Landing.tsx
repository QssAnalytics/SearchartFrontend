import { Fragment } from "react";
import Hero from "../components/Landing/Hero";
import Navbar from "../layout/Navbar";
import About from "../components/Landing/About";
import Footer from "../layout/Footer";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />

      <Hero />

      <About />
      <Footer />
    </Fragment>
  );
};

export default Landing;
