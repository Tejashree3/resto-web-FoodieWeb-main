import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  return (
    <div className=" w-full lg:w-[300px] p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:bg-slate-800 dark:text-white rounded-lg">
      <img className=" rounded-xl" src={props.img} alt="img" />
      <div className=" space-y-4">
        <h3 className=" font-semibold text-center text-xl pt-6">{props.title}</h3>
     
        <div className=" flex  items-center justify-center gap-4">
          <h3 className="  dark:text-white text-menu-color font-semibold text-lg text-center">{props.Desc}</h3>
          {/* <Button title="Buy Now" /> */}
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
