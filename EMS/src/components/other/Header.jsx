import React from "react";

const Header = ({ data }) => {
  return (
    <div>
      <h1 className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">
          Hello, <br />{" "}
          <span className="text-3xl font-semibold">{data.firstname} 👋</span>
        </h1>
        <button className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-lg">
          Logout
        </button>
      </h1>
    </div>
  );
};

export default Header;
