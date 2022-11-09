import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProductCard = ({ i }) => {
  const handleClick = () => {
    console.log(i);
  };
  return (
    <div className="flex flex-col max-w-sm w-300 px-4 gap-2 justify-center items-center text-center py-2 h-420 ">
      <div className="bg-white relative w-full h-370 rounded-xl shadow-lg">
        <img src={i.imgurl} alt={i.title} className="object-cover absolute -top-20" />
        <div className="h-full pt-40 px-2 flex flex-col text-center items-center justify-center gap-3">
          <p className="font-bold">{i.title}</p>
          <p className="text-sm text-gray-600">{i.desc}</p>
          <p className="font-bold text-xl">${i.price}</p>
          <motion.button
            onClick={handleClick}
            type="button"
            whileTap={{ scale: 0.75 }}
            className="hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center group hover:shadow-lg hover:text-white text-xl text-red-600 transition-all ease-in duration-200"
          ><FaShoppingBasket className="" />
          </motion.button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
