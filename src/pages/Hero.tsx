import React from "react";
import { Header } from "../components/Header";
import { Home } from "../components/Home";

export const Hero = () => {
  return (
    <div className="flex flex-col  ">
      <Header />
      <Home/>
    </div>
  );
};
