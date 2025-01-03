import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative w-10 h-10 flex justify-center items-center">
        <span className="absolute w-[40px] h-full rounded-full bg-green-300 opacity-80 animate-ping"></span>
        <span className="absolute w-[20px] h-[20px] rounded-full bg-lightText opacity-80 animate-ping delay-[450ms]"></span>
      </div>
    </div>
  );
};

export default Loader;
