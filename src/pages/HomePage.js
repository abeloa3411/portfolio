import React from "react";
import Work from "../components/ Work";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Work />
      <Articles />
      <Projects />
    </>
  );
};

export default HomePage;
