import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "../Common/Navbar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <Topbar /> {/* Topbar Component */}
      <Navbar /> {/* Navbar Component */}
      {/* Cart drawer */}
    </header>
  );
};

export default Header;
