import React from 'react'
import Navbar2 from './Navbar2';
import Footer2 from './Footer2';

const Terms = () => {
    return (
      <>
 <Navbar2/>
    
        <div className=" min-h-screen   flex w-full items-center justify-start   pt-[35px] p-2 bg-white transform  max-w-screen-lg mx-auto">
          <div className="fadeIn w-full max-w-4xl p-6   ">
            <h1 className="text-4xl text-lightText font-bold mt-16 mb-8">Terms and conditions</h1>
            <h4 className="font-medium text-menu-color ">Welcome to </h4>
            <p className="my-4 mx-4 text-menu-color">
              Add some terms here, for example "These Terms govern your use of Spangle and the Spangle applications, products and conditions that we offer (the Spangle Product or Products), except where we expressly state that separate Terms (and not these) apply."
              <br />
              <br />
              Would appreciate you visiting spangle.com.au to click around and help my SEO :)
            </p>
    
            <div className="conditionsLeadingSection my-4">
              <h4>
                <span className="text-2xl font-semibold text-backgroundColor">1.</span>
                <span className="text-2xl font-semibold text-backgroundColor">Our conditions</span>
              </h4>
              <p className="my-4 text-menu-color">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo expedita minima architecto adipisci atque neque libero facilis officia blanditiis provident repudiandae numquam earum dolorem hic quis ipsa, a quisquam placeat:
              </p>
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="relative mb-4">
                  <h6 className="font-bold ml-4 mt-4 mb-2 text-yellow">Some conditions info</h6>
                  <p className="ml-4 text-menu-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non est delectus ex ea in voluptatum officiis? Consequatur similique praesentium veniam voluptates sit sed qui id, porro facere numquam sequi?
                  </p>
                  <div className={`absolute top-1 left-0 h-10 w-1 bg-gradient-to-br from-backgroundColor to-lightText`} />
                </div>
              ))}
            </div>
    
            <div className="conditionsLeadingSection my-4">
              <h4>
                <span className="text-2xl font-semibold text-backgroundColor">2.</span>
                <span className="text-2xl font-semibold  text-backgroundColor">Lorem ipsum</span>
              </h4>
              <p className="my-4 text-menu-color">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo expedita minima architecto adipisci atque neque libero facilis officia blanditiis provident repudiandae numquam earum dolorem hic quis ipsa, a quisquam placeat:
              </p>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="relative mb-4">
                  <h6 className="font-bold ml-4 mt-4 mb-2 text-yellow">Some conditions info</h6>
                  <p className="ml-4 text-menu-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus rem quas eius, deleniti quos pariatur earum nihil voluptate inventore vel atque possimus labore laborum, reprehenderit maxime, placeat quo corrupti.
                  </p>
                  <div className={`absolute top-1 left-0 h-10 w-1 bg-gradient-to-br from-lightText to-backgroundColor`} />
                </div>
              ))}
            </div>
    
            <div className="conditionsLeadingSection my-4">
              <h4>
                <span className="text-2xl font-semibold  text-backgroundColor">3.</span>
                <span className="text-2xl font-semibold text-backgroundColor">Lorem ipsum</span>
              </h4>
              <p className="my-4 text-menu-color">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo expedita minima architecto adipisci atque neque libero facilis officia blanditiis provident repudiandae numquam earum dolorem hic quis ipsa, a quisquam placeat:
              </p>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="relative mb-4">
                  <h6 className="font-bold ml-4 mt-4 mb-2 text-yellow">Some conditions info</h6>
                  <p className="ml-4 text-menu-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus rem quas eius, deleniti quos pariatur earum nihil voluptate inventore vel atque possimus labore laborum, reprehenderit maxime, placeat quo corrupti.
                  </p>
                  <div className={`absolute top-1 left-0 h-10 w-1 bg-gradient-to-br from-backgroundColor to-lightText`} />
                </div>
              ))}
            </div>
    
            <div className="conditionsLeadingSection my-4">
              <h4>
                <span className="text-2xl font-semibold text-backgroundColor">4.</span>
                <span className="text-2xl font-semibold text-backgroundColor">Lorem ipsum</span>
              </h4>
              <p className="my-4 text-menu-color">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo expedita minima architecto adipisci atque neque libero facilis officia blanditiis provident repudiandae numquam earum dolorem hic quis ipsa, a quisquam placeat:
              </p>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="relative mb-4">
                  <h6 className="font-bold ml-4 mt-4 mb-2 text-yellow">Some conditions info</h6>
                  <p className="ml-4 text-menu-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus rem quas eius, deleniti quos pariatur earum nihil voluptate inventore vel atque possimus labore laborum, reprehenderit maxime, placeat quo corrupti.
                  </p>
                  <div className={`absolute top-1 left-0 h-10 w-1 bg-gradient-to-br from-lightText to-backgroundColor`} />
                </div>
              ))}
            </div>
    
            {/* <h4 className="border-b-2 border-black mt-4 mb-4 pb-1 cursor-pointer">CLOSE TERMS AND CONDITIONS</h4> */}
          </div>
        </div>

<Footer2/>
        </>
      );
    };
    

export default Terms