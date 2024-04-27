import React, { useState } from "react";
import "./Navbar.css";
// assets
import LogoIcon from "../../assets/Images/Navbar/Logo.png";
import cartIcon from "../../assets/Images/Navbar/cart.png";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   navigation links
  const navItems = (
    <>
      <div className="flex flex-col md:flex-row md:mx-6">
        <a className="navigation-links" href="#">
          Home
        </a>
        <a className="navigation-links" href="#">
          Products
        </a>
        <a className="navigation-links" href="#">
          Services
        </a>
        <a className="navigation-links" href="#">
          Login
        </a>
      </div>
      <div className="flex justify-center md:block">
        <a className="nav-cart" href="#">
          <img src={cartIcon} alt="" />
        </a>
      </div>
    </>
  );

  return (
    <nav className="lg:px-[108px] relative bg-white shadow">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          {/* logo */}
          <img className="w-auto h-6 sm:h-7" src={LogoIcon} alt="" />
          <h2 className="lg:ml-2 uppercase font-bold text-xl">Kabbik</h2>

          {/* mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <RiMenu3Line size="1.5em" color="black" />
              ) : (
                <RiCloseLine size="1.5em" color="black" />
              )}
            </button>
          </div>
        </div>

        {/* mobile menu open & close and NavLinks*/}
        <div
          className={`${
            isOpen
              ? "translate-x-0 opacity-100 "
              : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          {navItems}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
