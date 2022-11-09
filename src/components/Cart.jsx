import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { GrClearOption } from 'react-icons/gr';
import CartItem from './CartItem';
import useShop from '../context/ShopProvider';

const Cart = () => {
  const { setCartShow, cartShow, cartItems } = useShop();

  const showCart = () => {
    console.log('omg');
    setCartShow(!cartShow);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen  bg-white z-[100] "
    >
      <div className="w-full flex justify-between items-center p-4">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <BsArrowLeft className="text-textColor text-3xl cursor-pointer" />
        </motion.div>
        <p className="text-lg font-bold text-textColor ">Cart</p>
        <motion.div whileTap={{ scale: 0.75 }}><GrClearOption className="cursor-pointer p-1 text-3xl bg-slate-200 rounded-full hover:shadow-lg" /></motion.div>
      </div>

      <div className="w-full h-full overflow-y-scroll scrollbar-none justify-between flex items-center flex-col p-2 pb-20 gap-3">
        {cartItems?.length > 0 ? (
          <>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <div className="w-full flex-1 flex flex-col items-center px-8 py-2 justify-end">
              <div className="flex justify-between items-center w-full mb-4 font-bold px-2">
                <p className="font-semibold">Subtotal</p>
                <p className="">RM 200</p>

              </div>
              <div className="flex justify-between items-center w-full mb-4 font-bold px-2">
                <p className="font-semibold">Shipping fees</p>
                <p className="">RM 10</p>

              </div>
              <div className="w-full border-b border-gray-400 my-2" />
              <div className="flex justify-between items-center w-full mb-6 font-bold px-2">
                <p className="font-semibold">Total</p>
                <p className="">RM 210</p>

              </div>
              <motion.button type="submit" whileTap={{ scale: 0.85 }} className="bg-orange-600 text-white rounded-full w-full p-2 hover:shadow-lg font-bold">Checkout</motion.button>
            </div>
          </>
        ) : <p>No items in the cart currently</p>}
      </div>

    </motion.div>

  );
};

export default Cart;
