import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const CartItem = () => (
  <div className="w-full flex gap-2 bg-slate-100 rounded cursor-pointer hover:shadow-md">
    <img src="https://firebasestorage.googleapis.com/v0/b/homely-dad46.appspot.com/o/Images%2Fmarg-featured-768x768.webp?alt=media&token=136db5ee-42bb-4bb4-b513-a33944046c46" alt="pizza" className="w-28 h-28 " />
    <div className="flex flex-col flex-1 justify-center items-start">
      <p className="font-bold text-base text-cartItem">Margherita Pizza</p>
      <p className="font-bold text-sm text-gray-700">RM 200</p>
    </div>
    <div className="flex flex-1 gap-3 justify-center items-center text-xl">
      <AiOutlinePlusCircle className="text-2xl" />
      <p className="font-semibold">1</p>
      <AiOutlineMinusCircle className="text-2xl" />
    </div>
  </div>
);

export default CartItem;
