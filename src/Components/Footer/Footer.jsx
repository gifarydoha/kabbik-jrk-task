import React from "react";
import appStore from "../../assets/Images/Footer/app-store.png";
import playStore from "../../assets/Images/Footer/play-store.png";
import facebook from "../../assets/Images/Footer/facebook.png";
import instagram from "../../assets/Images/Footer/instagram.png";
import twitter from "../../assets/Images/Footer/twitter.png";
import linkedin from "../../assets/Images/Footer/linkedin.png";

const Footer = () => {
  return (
    <section className="bg-sea-green-300 text-white">
      <div className="text-xl flex flex-col lg:flex-row justify-center items-center  py-4 space-y-2 lg:space-y-0 lg:space-x-5">
        <p>
          Privacy Policy
          <span className="lg:ml-4 lg:border-r-2"></span>
        </p>
        <p>
          Terms of service <span className="lg:ml-4 lg:border-r-2"></span>
        </p>

        <p>
          Accessibility <span className="lg:ml-4 lg:border-r-2"></span>
        </p>

        <p>Contact Us</p>
      </div>
      <p className="my-2 lg:my-3 lg:w-[1290px] border-white pb-5 border-t-[.5px] mx-auto"></p>
      {/* store icon */}
      <div className="pb-16 flex justify-center items-center flex-col">
        <div className="flex justify-center gap-3 flex-col lg:flex-row mb-6">
          <img src={appStore} alt="" />
          <img src={playStore} alt="" />
        </div>
        <div>
          <p className="text-center mb-4 text-sm font-medium">FOLLOW US</p>
          <div className="flex justify-center items-center space-x-3">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
          <p className="font-sans text-xs mt-6">
            &copy;2024 Developed by Abu Jar Gifary Doha
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
