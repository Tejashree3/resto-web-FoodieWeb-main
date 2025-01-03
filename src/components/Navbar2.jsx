import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { BiRestaurant } from "react-icons/bi";

const Navbar2 = () => {
  return (
    <div className="z-[999999] fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-navbar-bg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link to="/" className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} style={{ color: "#555555" }} />
            </span>
            <h1 className="text-xl text-menu-color font-semibold">website</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
