import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navItems = [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Blog", href: "#" },
  ];

  const NavLink = ({ item }) => (
    <li>
      <a
        href={item.href}
        className="hover:text-purple-300 px-4 py-2"
        onClick={toggleMenu}
      >
        {item.label}
      </a>
    </li>
  );

  return (
    <nav className="bg-[#28293E] text-white py-4 px-6 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="z-10">
          <img src={Logo} alt="Logo" className="h-[48px] w-[152px]" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 text-lg font-medium">
            {navItems.map((item, index) => (
              <NavLink key={index} item={item} />
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex items-center z-10">
          <button className="border border-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-black transition uppercase">
            CONTACT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={toggleMenu}>
          <FaBars className="text-white text-2xl" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#28293E] p-6">
            <div className="flex justify-between items-center mb-6">
              <img src={Logo} alt="Logo" className="h-[48px] w-[152px]" />
              <FaTimes
                className="text-white text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            </div>

            <ul className="space-y-6 text-lg font-medium">
              {navItems.map((item, index) => (
                <NavLink key={index} item={item} />
              ))}
            </ul>

            <button className="mt-6 border border-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-black transition w-full uppercase">
              CONTACT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
