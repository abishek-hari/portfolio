import React from "react";
import { Outlet } from "react-router";
import {
  Header,
  Hero,
  About,
  Skill,
  Work,
  Collab,
  Footer,
} from "../components/components";

const HomePage = () => {
  return (
    <>
      <Outlet />
      <Header />
      <Hero />
      <About />
      <Skill />
      <Work />
      <Collab />
      <Footer />
    </>
  );
};

export default HomePage;
