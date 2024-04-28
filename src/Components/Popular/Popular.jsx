import React from "react";
import { RxStarFilled } from "react-icons/rx";
import background from "../../assets/Images/Popular/popular-background.png";
import chair from "../../assets/Images/Popular/chair.png";
import chair2 from "../../assets/Images/Popular/chair2.png";
import chair3 from "../../assets/Images/Popular/chair3.png";
import chair4 from "../../assets/Images/Popular/chair4.png";

const Popular = () => {
  return (
    <section className="section-padding pt-10 flex justify-center items-center flex-col">
      {/* heading */}
      <div className="mb-16 lg:mb-52 text-center flex justify-center items-center">
        <div>
          <h2 className="font-semibold text-3xl uppercase mb-2">
            Popular <span className="text-sea-green-500">We Have</span>
          </h2>
          <p className="text-center text-sm text-[#737373] max-w-[848px]">
            Furniture Concepts is a contract furniture wholesaler serving the
            needs of group living environments including Community Housing,
            Treatment & Recovery Centers, Assisted Living, Camps, Conference
            Centers, Student Housing, Military Dorms & Quarters, and more!
            Behavioral Healthcare Facility Furniture.
          </p>
        </div>
      </div>
      {/* cards */}
      <div className="text-white grid grid-cols-2 lg:grid-cols-4 gap-y-24 lg:gap-y-0 gap-x-[2px] lg:gap-x-0">
        <div className="relative">
          <div className="absolute bottom-[125px] lg:bottom-[162px] left-[20%] lg:left-7 ">
            <img className="w-28 lg:w-full lg:h-full" src={chair} alt="" />
          </div>
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="px-16 pt-12 lg:pt-20 pb-7 space-y-[2px] flex items-center justify-center flex-col bg-center bg-contain lg:bg-cover bg-no-repeat"
          >
            <h2 className="text-base lg:text-2xl whitespace-nowrap">
              Tulip Chair Furniture
            </h2>
            <div className="text-gold-yellow-500 flex flex-row justify-items-center">
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
            </div>
            <h2 className="text-base lg:text-2xl whitespace-nowrap font-semibold">
              $12.09
            </h2>
            <button className="yellow-btn mt-1">Buy Now</button>
          </div>
        </div>
        {/*  */}
        <div className="relative">
          <div className="absolute bottom-[125px] lg:bottom-[162px] left-[20%] lg:left-8">
            <img className="w-28 lg:w-full lg:h-full" src={chair2} alt="" />
          </div>
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="px-16 pt-12 lg:pt-20 pb-7 space-y-[2px] flex items-center justify-center flex-col bg-center bg-contain lg:bg-cover bg-no-repeat"
          >
            <h2 className="text-base lg:text-2xl whitespace-nowrap">
              Beath Chair Furniture
            </h2>
            <div className="text-gold-yellow-500 flex flex-row justify-items-center">
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
            </div>
            <h2 className="text-base lg:text-2xl whitespace-nowrap font-semibold">
              $22.00
            </h2>
            <button className="yellow-btn mt-1">Buy Now</button>
          </div>
        </div>
        {/*  */}
        <div className="relative">
          <div className="absolute bottom-[125px] lg:bottom-[162px] left-[20%] lg:left-[70px]">
            <img className="w-28 lg:w-full lg:h-full" src={chair3} alt="" />
          </div>

          <div
            style={{ backgroundImage: `url(${background})` }}
            className="px-16 pt-12 lg:pt-20 pb-7 space-y-[2px] flex items-center justify-center flex-col bg-center bg-contain lg:bg-cover bg-no-repeat"
          >
            <h2 className="text-base lg:text-2xl whitespace-nowrap">
              Yellow armchair
            </h2>
            <div className="text-gold-yellow-500 flex flex-row justify-items-center">
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
            </div>
            <h2 className="text-base lg:text-2xl whitespace-nowrap font-semibold">
              $10.00
            </h2>
            <button className="yellow-btn mt-1">Buy Now</button>
          </div>
        </div>
        {/*  */}
        <div className="relative">
          <div className="absolute bottom-[125px] lg:bottom-[162px] left-10">
            <img className="w-28 lg:w-full lg:h-full" src={chair4} alt="" />
          </div>
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="px-16 pt-12 lg:pt-20 pb-7 space-y-[2px] flex items-center justify-center flex-col bg-center bg-contain lg:bg-cover bg-no-repeat"
          >
            <h2 className="text-base lg:text-2xl whitespace-nowrap">
              Front view Chair
            </h2>
            <div className="text-gold-yellow-500 flex flex-row justify-items-center">
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
              <RxStarFilled size="1rem" />
            </div>
            <h2 className="text-base lg:text-2xl whitespace-nowrap font-semibold">
              $19.03
            </h2>
            <button className="yellow-btn mt-1">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
