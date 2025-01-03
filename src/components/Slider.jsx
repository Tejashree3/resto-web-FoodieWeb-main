import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation'; // Import Swiper navigation styles
import { EffectCreative, Navigation } from 'swiper/modules';
import '../layouts/swiper.css'
export default function Slider() {

  const slides = Array.from({ length: 9 }).map((_, index) => (
    <SwiperSlide 
      key={index} 
      className="dark:bg-slate-800 dark:text-white bg-backgroundColor text flex items-center justify-center justify-center text-2xl font-bold text-lightText"  

    >
      Slide {index + 1}
    </SwiperSlide>
  ));

  return (
    <>
        <div className="dark:bg-slate-600 dark:text-white h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">

    <div className="flex flex-col lg:flex-row lg:gap-3  gap-16">
      <div className="w-full lg:[500px] flex flex-col justify-start lg:px-10 px-5 space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center dark:text-white text-lightText ">
          Why Choose Us?
        </h1>
     
        <p className="dark:text-white text-menu-color text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit
          veritatis facere. Magnam!
        </p>
        {/* <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div> */}
      </div>

      <div className="mx-auto lg:w-[500px]  w-[400px] flex justify-center items-center">
<Swiper
  grabCursor={true}
  effect={'creative'}
  creativeEffect={{
    prev: { shadow: true, translate: ['-125%', 0, -800], rotate: [0, 0, -90] },
    next: { shadow: true, translate: ['125%', 0, -800], rotate: [0, 0, 90] },
  }}
  modules={[EffectCreative, Navigation]} // Include Navigation module
  navigation // Enable navigation
  className="mySwiper5 w-[400px]  h-[250px] rounded-xl"
>
  {slides}
</Swiper>

   
</div>
</div>
</div>


    {/* 
Effect creative slider */}
      {/* <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: { shadow: true, translate: [0, 0, -400] },
          next: { translate: ['100%', 0, 0] },
        }}
        modules={[EffectCreative]}
        className="mySwiper w-80 h-60 mx-auto mt-24"
      >
        {slides}
      </Swiper> */}

      {/* normal slider */}
      {/* <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: { shadow: true, translate: ['-120%', 0, -500] },
          next: { shadow: true, translate: ['120%', 0, -500] },
        }}
        modules={[EffectCreative]}
        className="mySwiper2 w-80 h-60 mx-auto mt-24"
      >
        {slides}
      </Swiper> */}
      {/* fed normal slidre */}
      {/* <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: { shadow: true, translate: ['-20%', 0, -1] },
          next: { translate: ['100%', 0, 0] },
        }}
        modules={[EffectCreative]}
        className="mySwiper3 w-80 h-60 mx-auto mt-24"
      >
        {slides}
      </Swiper> */}

      {/* flip slider */}
      {/* <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: { shadow: true, translate: [0, 0, -800], rotate: [180, 0, 0] },
          next: { shadow: true, translate: [0, 0, -800], rotate: [-180, 0, 0] },
        }}
        modules={[EffectCreative]}
        className="mySwiper4 w-80 h-60 mx-auto mt-24"
      >
        {slides}
      </Swiper> */}
      {/* <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: { shadow: true, origin: 'left center', translate: ['-5%', 0, -200], rotate: [0, 100, 0] },
          next: { origin: 'right center', translate: ['5%', 0, -200], rotate: [0, -100, 0] },
        }}
        modules={[EffectCreative]}
        className="mySwiper6 w-80 h-60 mx-auto mt-24"
      >
        {slides}
      </Swiper> */}
    </>
  );
}
