// import { useState } from 'react';
// import { FaFistRaised, FaBaby, FaLeaf, FaRunning, FaBrain, FaMedkit, FaHandHoldingHeart, FaStethoscope } from 'react-icons/fa'; // Import icons from react-icons

// const Objective = [
//   { id: 0, title: 'Fysiotherapie', description: 'Lorem ipsum facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaFistRaised /> },
//   { id: 1, title: 'Verloskunde', description: 'Lors adipiscing elit. Nam dignissim facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaBaby /> },
//   { id: 2, title: 'Diëtist', description: 'tetur adipiscing elit. Nam dignissim facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaLeaf /> },
//   { id: 3, title: 'Ergotherapie', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaRunning /> },
//   { id: 4, title: 'Kraamzorg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim facilisis dolor in molestie. Praquis tincidunt.', icon: <FaBrain /> },
//   { id: 5, title: 'Logopedie', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim facilisis dolor in molestie. .', icon: <FaMedkit /> },
//   { id: 6, title: 'Podotherapie', description: 't, consectetur adipiscing elit. Nam dignissim facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaHandHoldingHeart /> },
//   { id: 7, title: 'Psychologie', description: 'Lorem ipsum doloronsectetur adipiscing elit. Nam dignissim facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaStethoscope /> },
// ];

// const Service = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="relative bg-[#0074A7] flex justify-center items-center h-screen">
//       <div className="flex w-full max-w-screen-lg">
//         {/* Circle Container */}
//         <div className="relative w-64 h-64 mx-auto">
//           <ul className="absolute inset-0 flex items-center justify-center">
//             {services.map((service, index) => (
//               <li
//                 key={service.id}
//                 className={`absolute w-16 h-16 flex items-center justify-center rounded-full bg-white border border-[#70D6FE] shadow-md transition-transform duration-300 ${
//                   index === activeIndex ? 'text-[#F9A732]' : 'text-gray-500'
//                 }`}
//                 style={{
//                   transform: `rotate(${index * 45}deg) translate(9.5em) rotate(${-index * 45}deg)`,
//                 }}
//               >
//                 <a
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setActiveIndex(index);
//                   }}
//                   className="flex items-center justify-center w-full h-full"
//                 >
//                   <div className="text-2xl">{service.icon}</div>
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-white text-xl font-light">
//             Our Services
//           </span>
//         </div>

//         {/* Services Container */}
//         <div className="ml-8 flex-1">
//           <ul>
//             {services.map((service, index) => (
//               <li
//                 key={service.id}
//                 className={`transition-opacity duration-300 ${index === activeIndex ? 'block opacity-100' : 'hidden opacity-0'}`}
//               >
//                 <div className="bg-white bg-opacity-30 border border-gray-200 rounded-lg shadow-md mb-4 p-4">
//                   <div className="bg-[#009FE3] text-white p-4 rounded-t-lg flex items-center">
//                     <div className="text-3xl mr-4">{service.icon}</div>
//                     <h4 className="text-lg font-semibold">{service.title}</h4>
//                   </div>
//                   <div className="p-4 text-white">
//                     <p>{service.description}</p>
//                   </div>
//                   <div className="bg-white bg-opacity-30 border-t border-[#5CC2EA] p-4 rounded-b-lg">
//                     <a href="#" className="btn btn-backgroundColor mr-2">Call US!</a>
//                     <a href="#" className="btn btn-backgroundColor">More information</a>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Objective;
import React from 'react'
import { useState } from 'react';
import { FaFistRaised, FaBaby, FaLeaf, FaRunning, FaBrain, FaMedkit, FaHandHoldingHeart, FaStethoscope } from 'react-icons/fa'; // Import icons from react-icons
const Objectives = [
  { id: 0, title: 'Fysiotherapie', description: 'Lorem ipsum facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaFistRaised /> },
  { id: 1, title: 'Verloskunde', description: 'Lors adipiscing elit. Nam dignissim facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaBaby /> },
  { id: 2, title: 'Diëtist', description: 'tetur adipiscing elit. Nam dignissim facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaLeaf /> },
  { id: 3, title: 'Ergotherapie', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaRunning /> },
  { id: 4, title: 'Kraamzorg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim facilisis dolor in molestie. Praquis tincidunt.', icon: <FaBrain /> },
  { id: 5, title: 'Logopedie', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim facilisis dolor in molestie. .', icon: <FaMedkit /> },
  { id: 6, title: 'Podotherapie', description: 't, consectetur adipiscing elit. Nam dignissim facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaHandHoldingHeart /> },
  { id: 7, title: 'Psychologie', description: 'Lorem ipsum doloronsectetur adipiscing elit. Nam dignissim facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.', icon: <FaStethoscope /> },
];
const Objective = () => {
    const [activeIndex, setActiveIndex] = useState(0);

      return (
        <div className="min-h-screen dark:bg-slate-600 dark:text-white bg-backgroundColor flex flex-col lg:flex-row justify-center items-center lg:px-28 px-5">

        {/* <div className=" bg-backgroundColor flex justify-center items-center h-screen"> */}
          <div className="flex w-full lg:pt-1 lg:pb-0 pt-[80px] pb-[40px]  max-w-screen-lg flex-col lg:flex-row min-h-screen gap-20 justify-center items-center">
            {/* Circle Container */}
            <div className="relative w-64 lg:h-64 mx-auto   h-[300px]">
              <ul className="absolute inset-0 flex items-center justify-center">
                {Objectives.map((service, index) => (
                  <li
                    key={service.id}
                    className={`absolute w-16 h-16 flex items-center justify-center rounded-full bg-white border border-yellow shadow-md transition-transform duration-300 ${
                      index === activeIndex ? 'text-yellow' : 'text-lightText'
                    }`}
                    style={{
                      transform: `rotate(${index * 45}deg) translate(9.5em) rotate(${-index * 45}deg)`,
                    }}
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveIndex(index);
                      }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <div className="text-2xl">{service.icon}</div>
                    </a>
                  </li>
                ))}
              </ul>
              <span className=" dark:text-white absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-lightText text-center font-semibold text-4xl ">
                 Objective
              </span>
            </div>
    
            {/* Services Container */}
            <div className="ml-8 flex-1">
              <ul>
                {Objectives.map((service, index) => (
                  <li
                    key={service.id}
                    className={`transition-opacity duration-300 ${index === activeIndex ? 'block opacity-100' : 'hidden opacity-0'}`}
                  >
                    <div className="bg-white bg-opacity-30 border dark:bg-slate-800 dark:text-white border-gray-200 rounded-lg shadow-md mb-4 p-4">
                      <div className="bg-yellow text-lightText p-4 rounded-t-lg flex items-center">
                        <div className="text-3xl mr-4">{service.icon}</div>
                        <h4 className="text-lg font-semibold">{service.title}</h4>
                      </div>
                      <div className="p-4 text-white">
                        <p>{service.description}</p>
                      </div>
                      <div className="bg-white dark:text-white bg-opacity-30 border-t border-backgroundColor p-4 rounded-b-lg">
                        <a href="#" className="btn btn-backgroundColor mr-2 dark:text-white text-menu-color">Call US!</a>
                        <a href="#" className="btn btn-backgroundColor dark:text-white text-menu-color">More information</a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
     
  )
}

export default Objective