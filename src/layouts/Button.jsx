import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-6 py-1 border-2 border-yellow text-lightText bg-white  transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
