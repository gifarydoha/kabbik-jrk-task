{
  /*
Author: Abu Jar Gifary Doha;
Date: 27/04/2024;
Description: This is the Homepage. It contains all other components.;
*/
}

// imports
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Popular from "../Components/Popular/Popular";
import Furniture from "../Components/Furniture/Furniture";
import Fit from "../Components/Fit/Fit";

const Home = () => {
  return (
    <main className="home-layout">
      <Navbar />
      <Banner />
      <Popular />
      <Furniture />
      <Fit />
    </main>
  );
};

export default Home;
