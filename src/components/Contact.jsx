import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
    const handleFocus = (e) => {
        const parent = e.target.parentNode;
        parent.classList.add('focus');
      };
    
      const handleBlur = (e) => {
        const parent = e.target.parentNode;
        if (e.target.value === '') {
          parent.classList.remove('focus');
        }
      };
    
      return (
        <div className=" dark:bg-slate-600 dark:text-white w-full min-h-screen p-8  flex items-center justify-center">
          <div className=" relative w-full max-w-[820px] bg-white rounded-lg shadow-lg z-[000000] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="p-10 dark:bg-slate-800 dark:text-white bg-backgroundColor relative">
              <span className="absolute w-[130px] h-[130px] rounded-full bg-gradient-to-tr from-transparent to-navbar-bg top-[130px] right-[-40px]"></span>
              <span className="absolute w-[80px] h-[80px] rounded-full bg-gradient-to-tr from-transparent to-navbar-bg top-[10px] right-[30px]"></span>
              <h3 className="text-white font-medium text-2xl mb-3">Contact us</h3>
              <form className="z-10 relative">
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="name"
                    className="w-full outline-none border-2 border-gray-100 bg-transparent p-3 text-white font-medium rounded-md transition duration-300"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <label className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-100 text-sm font-normal pointer-events-none transition-all duration-500">
                    Username
                  </label>
                  <span className="absolute top-0 left-6 transform -translate-y-1/2 text-sm pointer-events-none transition-all duration-300 opacity-0"></span>
                </div>
                <div className="relative mb-4">
                  <input
                    type="email"
                    name="email"
                    className="w-full outline-none border-2 border-gray-100 bg-transparent p-3 text-white font-medium rounded-md transition duration-300"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <label className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-100 text-sm font-normal pointer-events-none transition-all duration-500">
                    Email
                  </label>
                  <span className="absolute top-0 left-6 transform -translate-y-1/2 text-sm pointer-events-none transition-all duration-300 opacity-0"></span>
                </div>
                <div className="relative mb-4">
                  <input
                    type="tel"
                    name="phone"
                    className="w-full outline-none border-2 border-gray-100 bg-transparent p-3 text-white font-medium rounded-md transition duration-300"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <label className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-100 text-sm font-normal pointer-events-none transition-all duration-500">
                    Phone
                  </label>
                  <span className="absolute top-0 left-6 transform -translate-y-1/2 text-sm pointer-events-none transition-all duration-300 opacity-0"></span>
                </div>
                <div className="relative mb-4">
                  <textarea
                    name="message"
                    className="w-full outline-none border-2 border-gray-100 bg-transparent p-3 text-white font-medium rounded-md resize-none h-[150px] transition duration-300"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  ></textarea>
                  <label className="absolute top-[10px] left-3 text-gray-100 text-sm font-normal pointer-events-none transition-all duration-500">
                    Message
                  </label>
                  <span className="absolute top-0 left-6 transform -translate-y-1/2 text-sm pointer-events-none transition-all duration-300 opacity-0"></span>
                </div>
                <button type="submit" className="w-full bg-white border-2 border-gray-100 text-lightText font-medium p-3 rounded-md transition duration-300 hover:bg-transparent hover:text-white">
                  Send
                </button>
              </form>
            </div>
            <div className="p-10 relative bg-white dark:bg-slate-800 dark:text-white">
              <h3 className="text-lightText dark:text-white font-bold text-2xl mb-3">Let's get in touch</h3>
              <p className="dark:text-white text-lightText mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
              </p>
              <div className="space-y-4">
                <div className="flex items-center dark:text-white text-lightText text-sm">
                  <FaMapMarkerAlt className="text-backgroundColor mr-3" />
                  <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div className="flex items-center dark:text-white text-lightText text-sm">
                  <FaEnvelope className="text-backgroundColor mr-3" />
                  <p>lorem@ipsum.com</p>
                </div>
                <div className="flex items-center dark:text-white text-lightText text-sm">
                  <FaPhone className="text-backgroundColor mr-3" />
                  <p>123-456-789</p>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-lightText dark:text-white">Connect with us :</p>
                <div className="flex space-x-3 mt-2">
                  <a href="#" className="w-8 h-8  rounded-md bg-gradient-to-br from-backgroundColor to-backgroundColor text-white flex items-center justify-center hover:scale-105 transition duration-300">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-md bg-gradient-to-br from-backgroundColor to-backgroundColor text-white flex items-center justify-center hover:scale-105 transition duration-300">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-md bg-gradient-to-br from-backgroundColor to-backgroundColor text-white flex items-center justify-center hover:scale-105 transition duration-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-md bg-gradient-to-br from-backgroundColor to-backgroundColor text-white flex items-center justify-center hover:scale-105 transition duration-300">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Contact;
