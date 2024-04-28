import React from "react";
import bigFurniture from "../../assets/Images/Furniture/big-furniture.png";
import modernFurniture from "../../assets/Images/Furniture/modern-furniture.png";
import homeComfort from "../../assets/Images/Furniture/home-comfort.png";

const Furniture = () => {
  return (
    <section className="section-padding pt-0 lg:py-12 flex justify-between items-center flex-col lg:flex-row gap-y-4 lg:gap-7 text-white">
      {/* big */}
      <div className="relative w-[393px] h-[215px] lg:w-[771px] lg:h-[460px] bg-aqua-blue-100 rounded-md flex justify-end">
        <img
          className="absolute left-0 bottom-0 pt-2 lg:pt-0 mb-4 ml-2 lg:ml-9 h-[200px] lg:h-[373px]"
          src={bigFurniture}
          alt="Furniture"
        />
        <div className="bg-aqua-blue-500 rounded-md w-[60%] lg:w-[457px] pt-6">
          <h1 className=" text-3xl lg:text-6xl pl-24 lg:pl-40 font-Italianno">
            Furniture
          </h1>
          <h2 className=" text-4xl lg:text-8xl pl-28 lg:pl-48 font-Italianno">
            Big Sale
          </h2>
          <button className="big-furniture-btn ml-[150px] lg:ml-[292px] mt-2 lg:mt-6">
            Order Now
          </button>
        </div>
      </div>
      {/* modern */}
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-7">
        <div className="relative w-[393px] lg:w-[496px] h-[215px] bg-miranda-100 rounded-md flex justify-end">
          <img
            className="absolute left-0 bottom-0 ml-9 h-[180px] lg:h-[204px]"
            src={modernFurniture}
            alt="Furniture"
          />
          <div className="bg-miranda-500 rounded-md w-[60%] lg:w-[313px] flex items-center flex-col pl-10 lg:pl-0 pt-12 lg:pt-14">
            <h1 className="text-2xl lg:text-3xl font-medium font-k2d">
              Modern
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium font-k2d">
              Furniture
            </h2>
            <button className="modern-furniture-btn mt-4">Shop Now</button>
          </div>
        </div>
        {/* home */}
        <div className="relative w-[393px] lg:w-[496px] h-[215px] bg-lime-green-100 rounded-md flex justify-end">
          <img
            className="absolute left-0 bottom-0 mb-2 ml-2 h-[160px] lg:h-[187px]"
            src={homeComfort}
            alt="Furniture"
          />
          <div className="bg-lime-green-500 rounded-md w-[60%] lg:w-[313px] flex items-center flex-col pt-5">
            <h1 className="text-2xl lg:text-3xl font-medium font-Kalam ml-[52px]">
              Home Comfort
            </h1>
            <button className="home-furniture-btn mt-2 ml-[136px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Furniture;
