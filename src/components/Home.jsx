import React from "react";
import Button from "../layouts/Button";
import img1 from "../assets/img/img4.jpg"
const Home = () => {
  return (
    <>
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">

     <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className="dark:text-white text-yellow font-semibold text-4xl lg:text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className=" text-white text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore
          deleniti?
        </p>
        <div className="  flex justify-start">
          <Button title="Order Now" />
        </div>
      </div>
    </div>



</>

  );
};

export default Home;
