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
import Blog from "../Components/Blog/Blog";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <main className="home-layout">
      <Navbar />
      <Banner />
      <Popular />
      <Furniture />
      <Fit />
      <Blog />
      <Footer />
    </main>
  );
};

export default Home;
