import React from "react";
import "./Banner.css";
import bannerImage from "../../assets/Images/Banner/Banner.png";
import sofa from "../../assets/Images/Banner/sofa.png";
import chair from "../../assets/Images/Banner/chair.png";
import bed from "../../assets/Images/Banner/bed.png";
import { GoLinkExternal } from "react-icons/go";

const Banner = () => {
  return (
    <section className="relative mb-14">
      <div className="section-padding pt-12 lg:pb-20 flex items-center flex-col lg:flex-row gap-4 lg:gap-8 bg-gradient-to-r from-gold-yellow-200 to-gold-yellow-300">
        <div className="font-title">
          <h1 className="text-5xl lg:text-7xl font-semibold">
            <span className="text-sea-green-900">We</span>{" "}
            <span className="text-sea-green-500">Provide High</span>
          </h1>
          <h2 className="text-sea-green-900 font-semibold text-4xl lg:text-5xl pt-3 pb-8">
            Quality Furniture
          </h2>
          <p className="max-w-[834px] text-[#001C13] text-[13px] lg:text-[15px]">
            Choose and buy from wide and largest sofa collection of Bangladesh.
            Regal, the most loved and selling furniture brand in Bangladesh,
            brought to you modern, ergonomic, budget friendly sofa. Choose among
            various types of Sofa Such as Fabric Sofa, Wooden Sofa, Sofa cum
            beds, L-shaped Sofa at affordable prices, redefine your living room
            with our most unique ergonomically and quality crafted Sofas that
            suit your needs best.
          </p>
        </div>
        <div className="lg:absolute right-[108px] top-0 z-40">
          <img
            src={bannerImage}
            className="w-[286px] lg:w-[430px] lg:h-[555px]"
            alt="banner"
          />
        </div>
      </div>

      <div className="w-full section-padding pt-6 lg:pt-[42px] pb-[60px] bg-gold-yellow-700 ">
        <div className=" flex justify-center lg:justify-start items-center flex-row">
          <button className="green-btn mr-9 text-xl">Buy Now</button>
          <div className="flex items-center flex-row ">
            <div className="bg-white rounded-md p-1 mr-[10px] text-sea-green-700">
              <GoLinkExternal />
            </div>
            <p className="text-xl">All Product</p>
          </div>
        </div>
      </div>

      {/* sofa,bed,chair */}
      <div className="relative flex justify-center items-center gap-1 lg:gap-0">
        <div className="absolute lg:-bottom-[52px] left-10 lg:left-[490px] flex justify-items-center">
          <div className="furniture-gradients w-24 h-24 flex justify-center items-center flex-col lg:w-[155px] px-1 py-1 lg:h-[159px] lg:px-[10px] lg:pt-11 lg:pb-4 rounded-3xl">
            <img src={sofa} alt="sofa" className="" />
            <p className="lg:mt-4 text-center text-base lg:text-xl font-semibold">
              Sofa
            </p>
          </div>
        </div>

        <div className="absolute lg:-bottom-[52px] flex justify-items-center">
          <div className="furniture-gradients w-24 h-24 flex justify-center items-center flex-col lg:w-[155px] lg:h-[159px] px-1 py-1 lg:px-10 lg:pt-[14px] lg:pb-[10px] rounded-3xl">
            <img
              src={chair}
              alt="chair"
              className="h-16 w-16 lg:h-full lg:w-full"
            />
            <p className="lg:mt-4 text-center text-base lg:text-xl font-semibold">
              Chair
            </p>
          </div>
        </div>

        <div className="absolute lg:-bottom-[52px] right-10 lg:right-[490px] flex justify-items-center lg:z-50">
          <div className="furniture-gradients w-24 h-24 flex justify-center items-center flex-col lg:w-[155px] lg:h-[159px] px-1 py-1 lg:px-5 lg:pt-6 lg:pb-4 rounded-3xl">
            <img
              src={bed}
              className="h-16 w-16 lg:h-full lg:w-full"
              alt="bed"
            />
            <p className="lg:mt-4 text-center text-base lg:text-xl font-semibold">
              Bed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
