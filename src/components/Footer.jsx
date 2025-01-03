import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="dark:bg-slate-800 dark:text-white bg-backgroundColor text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-2xl text-lightText pb-4">FoodieWeb</h1>
          <p className="text-lightText text-md">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-lightText">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-yellow transition-all cursor-pointer"
              href="/"
            >
              Dishes
            </a>
            <a
              className=" hover:text-yellow transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className=" hover:text-yellow transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className=" hover:text-yellow transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-lightText">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-yellow transition-all cursor-pointer"
              href="/"
            >
              Our Dishes
            </a>
            <a
              className=" hover:text-yellow transition-all cursor-pointer"
              href="/"
            >
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-lightText">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-yellow transition-all cursor-pointer"
              href="/"
            >
              FoodieWeb@email.com
            </a>
            <a
              className=" hover:text-yellow transition-all cursor-pointer"
              href="/"
            >
              +64 958 248 966
            </a>
            <Link to={'/terms'}
              className=" text-yellow transition-all cursor-pointer"
             
            >
         Terms & condition 
            </Link>
            <a
              className=" text-yellow transition-all cursor-pointer"
              href="/policy"
            >
        Privacy policy 
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-yellow"> website name</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
