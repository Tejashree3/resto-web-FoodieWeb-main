

import React from 'react'
import img from "../assets/img/img5.jpg";
const Services = () => {
  return (
    <div className="py-24 dark:bg-slate-600 dark:text-white bg-white">
    <div className="text-center mb-10">
   
      <h3 className="font-semibold dark:text-white text-4xl text-center text-lightText">
       Services
      </h3>
    </div>

    <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 md:col-gap-8 md:row-gap-10 flex flex-row items-center justify-center">
      <div className="">
        <ul className="grid grid-cols-1  md:row-gap-10  ">
          <li className="my-5 md:mt-0">
            <div className="flex flex-row justify-center items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-indigo-500">
                  <svg className="h-12 w-12 dark:text-white text-lightText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium dark:text-white text-menu-color font-semibold">Feature Name</h4>
                <p className="text-menu-color">Sub Headline</p>
              </div>
            </div>
          </li>
          <li className="my-5 md:mt-0">
            <div className="flex flex-row justify-center items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-indigo-500">
                  <svg className="h-10 w-10 dark:text-white text-lightText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 dark:text-white font-medium text-menu-color font-semibold">Feature Name</h4>
                <p className=" dark:text-white text-menu-color">Sub Headline</p>
              </div>
            </div>
          </li>
          <li className="my-5 md:mt-0">
            <div className="flex flex-row justify-center items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-indigo-500">
                  <svg className="h-10 w-10 dark:text-white text-lightText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 dark:text-white font-medium text-menu-color font-semibold">Feature Name</h4>
                <p className="dark:text-white text-menu-color">Sub Headline</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="">
        <div className="h-full mx-auto rounded bg-cover bg-right shadow-lg" 
         style={{ minHeight: '450px', backgroundImage: `url(${img})` }}></div>
      </div>

      <div className="">
        <ul className="grid grid-cols-1 md:row-gap-10">
          <li className="my-5 md:mt-0">
            <div className="flex flex-row justify-center items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-indigo-500">
                <svg className="h-10 w-10 dark:text-white text-lightText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
</svg>

                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg dark:text-white leading-6 font-medium text-menu-color font-semibold">Feature Name</h4>
                <p className="dark:text-white text-menu-color">Sub Headline</p>
              </div>
            </div>
          </li>
          <li className="my-5 md:mt-0">
            <div className="flex flex-row justify-center items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-indigo-500">
                  <svg className="h-10 w-10 dark:text-white text-lightText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 dark:text-white font-medium text-menu-color font-semibold">Feature Name</h4>
                <p className=" dark:text-white text-menu-color">Sub Headline</p>
              </div>
            </div>
          </li>
          <li className="my-5 md:mt-0">
            <div className="flex flex-row justify-center items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-indigo-500">
                  <svg className="h-12 w-12 dark:text-white text-lightText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 dark:text-white font-medium text-menu-color font-semibold">Feature Name</h4>
                <p className="dark:text-white text-menu-color">Sub Headline</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Services
