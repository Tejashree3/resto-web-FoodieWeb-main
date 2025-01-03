import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 dark:bg-slate-600 dark:text-white">
      <h1 className=" text-4xl  text-lightText font-semibold text-center pt-20 pb-10">
        Our Dishes
      </h1>

      <div className=" text-lightText flex flex-wrap gap-10 justify-center">
        <DishesCard img={img1} title="Tasty Dish" Desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. " />
        <DishesCard img={img2} title="Tasty Dish" Desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. " />
        <DishesCard img={img3} title="Tasty Dish" Desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. " />
        <DishesCard img={img4} title="Tasty Dish" Desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. " />
        <DishesCard img={img5} title="Tasty Dish" Desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. " />
        <DishesCard img={img6} title="Tasty Dish" Desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. " />
      </div>
    </div>
  );
};

export default Dishes;


// import React from 'react';

// const Dishes = () => {
//   return (
//     <section className=" min-h-screen  lg:px-32 px-5">
//     <div className="flex justify-center max-w-screen-md mx-auto">
//       <article className="card transform transition-transform duration-300 hover:scale-110 bg-white w-1/3 rounded-xl shadow-lg overflow-hidden mr-6">
//         <div className="relative">
//           <div className="absolute top-0 left-0 p-4 opacity-0 transition-opacity duration-200 hover:opacity-100 w-full">
//             <svg
//               className="w-4 fill-current text-black"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
//             </svg>
//             <div className="flex justify-end items-center mt-2">
//               <svg
//                 className="w-4 fill-current text-orange-500"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
//               </svg>
//               <span className="text-xs text-orange-500 ml-1">15 min</span>
//             </div>
//           </div>
//           <div className="card__img hidden"></div>
//           <a href="#" className="relative block">
//             <div className="bg-cover bg-center h-56 w-full transition-opacity duration-200 hover:opacity-30 bg-[url('https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')] rounded-t-xl"></div>
//           </a>
//         </div>
//         <div className="bg-white p-6 rounded-b-xl">
//           <span className="block text-gray-600 text-sm uppercase tracking-wide font-medium">Recipe</span>
//           <h3 className="mt-1 mb-2 font-semibold text-lg">Crisp Spanish tortilla Matzo brei</h3>
//           <span className="text-sm text-gray-600 font-medium">
//             by <a href="#" className="text-orange-500 font-semibold">Celeste Mills</a>
//           </span>
//         </div>
//       </article>

//       <article className="card transform transition-transform duration-300 hover:scale-110 bg-white w-1/3 rounded-xl shadow-lg overflow-hidden">
//         <div className="relative">
//           <div className="absolute top-0 left-0 p-4 opacity-0 transition-opacity duration-200 hover:opacity-100 w-full">
//             <svg
//               className="w-4 fill-current text-black"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
//             </svg>
//             <div className="flex justify-end items-center mt-2">
//               <svg
//                 className="w-4 fill-current text-orange-500"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
//               </svg>
//               <span className="text-xs text-orange-500 ml-1">5 min</span>
//             </div>
//           </div>
//           <div className="card__img hidden"></div>
//           <a href="#" className="relative block">
//             <div className="bg-cover bg-center h-56 w-full transition-opacity duration-200 hover:opacity-30 bg-[url('https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')] rounded-t-xl"></div>
//           </a>
//         </div>
//         <div className="bg-white p-6 rounded-b-xl">
//           <span className="block text-gray-600 text-sm uppercase tracking-wide font-medium">Travel</span>
//           <h3 className="mt-1 mb-2 font-semibold text-lg">Discover the sea</h3>
//           <span className="text-sm text-gray-600 font-medium">
//             by <a href="#" className="text-orange-500 font-semibold">John Doe</a>
//           </span>
//         </div>
//       </article>
//       </div>
//     </section>
//   );
// };

// export default Dishes;
