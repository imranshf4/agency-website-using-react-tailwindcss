import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
//index.css
import "../index.css";

// Define an array of nav items
const navItems = [
  { path: "/", label: "Home" },
  { path: "/features", label: "Features" },
  { path: "/pricing", label: "Pricing" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/help", label: "Help" },
];

const button= ['sign in','sign up'];
const ButtonSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-8 items-center">
      {button.map((item, index) => (
        <Link to={`${item == 'sign in' ? '/signIn' : 'signUp'}`}>
            <button key={index} className={`rounded-full cursor-pointer font-bold text-md capitalize ${item=='sign in'?'':'px-2 md:px-4 lg:px-8 md:py-2 py-1 md:text-button border-1 border-button hover:bg-button hover:text-white transition-colors duration-200'}`}>
          {item}
        </button>
        </Link>
      ))}
    </div>
  );
}

// Iterate over the navItems array and create a link for each item
const NavLinks = ({toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu }>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "font-bold text-button" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};


const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Correctly toggle menu state
  };

  return (
    <>
    <header
      className={`sticky top-0 z-50 bg-white w-full transition duration-300 ease-in-out px-8 md:px-15`}
    >
      <nav className="max-w-screen-2xl font-medium container mx-auto py-4 flex justify-between items-center">
        <NavLink to="/" className="font-bold flex gap-2">
          <img src={logo} alt="navbar" className="w-7 h-6 md:w-9 md:h-8" />
          <h1 className="text-xl">VPN</h1>
        </NavLink>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? null : <FaBars />}
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center text-white transition-transform transform space-y-4 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="absolute top-6 right-6 text-xl cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>
          <NavLinks toggleMenu={toggleMenu} />
          <ButtonSection />
        </div>

        {/* Cart Icon */}
        <div className="hidden md:flex gap-8 font-medium relative cursor-pointer">
          <ButtonSection />
        </div>
     
      </nav>
    </header>

    
    </>


  );
};

export default Navbar;
