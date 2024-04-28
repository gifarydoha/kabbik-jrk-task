import React from "react";
import grayChair from "../../assets/Images/Fit/gray-chair.png";
import yellowChair from "../../assets/Images/Fit/yellow-chair.png";
import purpleChair from "../../assets/Images/Fit/purple-chair.png";
import pinkChair from "../../assets/Images/Fit/pink-chair.png";
import background from "../../assets/Images/Fit/bg.png";
import icon from "../../assets/Images/Fit/video-icon.png";

const Fit = () => {
  return (
    <section className="section-padding pt-20 lg:pt-32 flex items-center flex-col lg:flex-row mb-9">
      <div className="relative flex flex-row">
        {/* gray chair */}
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="w-[393px] lg:w-[468px] h-[364px] lg:mr-[78px] bg-center bg-contain lg:bg-cover bg-no-repeat rounded-md"
        >
          <img
            className="absolute -top-6 lg:-top-28 left-8 w-72 lg:w-[401px] lg:h-[425px]"
            src={grayChair}
            alt=""
          />
        </div>
        {/* small chairs */}
        <div className="hidden lg:block max-w-[119px] lg:mr-[78px] space-y-8">
          {/* yellow */}
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="relative w-[119px] h-[89px] bg-center bg-contain lg:bg-cover bg-no-repeat rounded-md"
          >
            <img
              className="absolute -top-5 ml-3 lg:w-[99px] lg:h-[97px]"
              src={yellowChair}
              alt=""
            />
          </div>
          {/* purple */}
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="relative w-[119px] h-[89px] bg-center bg-contain lg:bg-cover bg-no-repeat rounded-md"
          >
            <img
              className="absolute -top-5 ml-3 lg:w-[99px] lg:h-[97px]"
              src={purpleChair}
              alt=""
            />
          </div>
          {/* pink */}
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="relative w-[119px] h-[89px] bg-center bg-contain lg:bg-cover bg-no-repeat rounded-md"
          >
            <img
              className="absolute -top-5 ml-3 lg:w-[99px] lg:h-[97px]"
              src={pinkChair}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* text */}
      <div className=" lg:w-[555px]">
        <h2 className="font-medium text-3xl lg:text-[40px]">Designed to Fit</h2>
        <h2 className="font-medium text-3xl lg:text-[40px] mt-1">Your Home</h2>
        <p className="text-sm mt-2 lg:mt-3 mb-4 lg:mb-6 lg:text-base text-[#737373]">
          Furniture Concepts is a contract furniture wholesaler serving the
          needs of group living environments including Community Housing,
          Treatment & Recovery Centers, Assisted Living, Camps, Conference
          Centers, Student Housing, Military Dorms & Quarters, and more!
          Behavioral Healthcare Facility Furniture.
        </p>
        <div className="flex items-center ">
          <button className="green-btn shadow-inner mr-6">Shop Now</button>
          <div className="flex items-center ">
            <img src={icon} alt="" />
            <h3 className="ml-1 text-lg text-[#04583F]">Watch Video</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fit;
