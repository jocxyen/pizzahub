import React from 'react';
import pizza from '../img/pizza_2.png';
import pointer from '../img/Group_9.png';
import arrow from '../img/Vector_4.png';
import tomato from '../img/image_19.png';
import cucumber from '../img/image_20.png';
import mushroom from '../img/Mask_Group.png';
import bean from '../img/Group_15.png';
import mask from '../img/Mask_Group-2.png';
import mask2 from '../img/Mask_Group-1.png';
import piz from '../img/pizza_test.png';

const Hero = () => (
  <section className="flex flex-col relative lg:h-screen mt-20 overflow-hidden h-685">
    <div className=" relative w-full min-w-screen-2xl pl-20 flex justify-center ">
      <img src={pizza} alt="pizza sample" className="invisible md:visible lg:w-[70%] lg:top-48 absolute z-1 mx-auto top-56 w-full " />
      <img src={piz} alt="pizza sample" className="md:invisible absolute z-1 mx-auto top-56 w-full " />

    </div>

    <div className="flex flex-col md:w-[70%] w-[90%] relative items-center justify-center  text-center mx-auto gap-3">
      <p className="font-extrabold md:text-3xl lg:text-5xl tracking-wide leading-normal md:w-[80%] w-[100%] pb-2 sm:text-3xl text-lg sm:w-[80%]">Доставка страв Італійської та Японської кухні у Ковелі</p>
      <p className="md:text-base sm:text-lg tracking-wide w-[100%] sm:w-[90%] lg:w-[80%] leading-7 text-sm">Якщо Ви вирішили відпочити або до Вас неочікувано завітали гості, телефонуйте до нас. Ми попіклуємося, щоб ваш відпочинок став комфортним, приємним та смачним.</p>

    </div>
    <p className="absolute md:text-lg w-72 text-left xl:right-24 xl:w-80 lg:right-36 lg:top-64 top-52 right-3 2 sm:text-md sm:w-40">При замовленні на суму від <span className="text-orange-500 font-bold ">700грн</span>, доставка безкоштовна</p>
    <img src={pointer} alt="pointer" className="absolute lg:left-[59%] lg:top-[50%] left-[35%] top-72 " />
    <img src={arrow} alt="arrow" className="rotate-180 sm:rotate-0 absolute lg:left-[63%] lg:top-72 top-60 left-[40%]" />
    <img src={tomato} alt="tomato" className="absolute invisible md:visible lg:left-[5%] lg:top-8 top-0 " />
    <img src={cucumber} alt="cucumber" className="invisible lg:visible absolute right-[1%] top-16" />
    <img src={mushroom} alt="mushroom" className="absolute invisible md:visible lg:left-[15%] lg:bottom-60 left-[10%] top-64" />
    <img src={bean} alt="bean" className="absolute lg:left-[25%] md:bottom-56 top-56 left-[30%] -z-0" />
    <img src={mask} alt="bean" className="absolute right-[18%] md:bottom-72" />
    <img src={mask} alt="bean" className="absolute right-[20%] md:bottom-52 w-8" />
    <img src={mask2} alt="bean" className="absolute md:right-[26%] lg:bottom-56 w-8 right-[20%] top-[30%] md:top-80" />
  </section>
);

export default Hero;
