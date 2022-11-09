/* eslint-disable no-unused-vars */
import Avatar from 'boring-avatars';
import React, { useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { MdAdd, MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { motion } from 'framer-motion';
import { app } from '../firebase';
import useShop from '../context/ShopProvider';

const Header = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const { user, signIn, signOut, setCartShow, cartShow, cartItems } = useShop();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
    // eslint-disable-next-line no-unused-vars
      signIn();
      console.log(user.displayName);
    } else setIsMenu(!isMenu);
  };

  const logout = () => {
    setIsMenu(false);
    signOut();
  };

  const showCart = () => {
    console.log('omg');
    setCartShow(!cartShow);
  };

  return (
    <div className="fixed z-50 w-screen bg-slate-100 p-2 px-8 drop-shadow-lg">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center">
          <p className="text-red-600 font-extrabold text-2xl">PizzaHub</p>
        </Link>
        <ul className="flex items-center gap-8 ">
          <li className="text-base cursor-pointer text-textColor hover:text-headingColor ease-in-out duration-100 transition-all ">Home</li>
          <li className="text-base cursor-pointer text-textColor hover:text-headingColor ease-in-out duration-100 transition-all ">Menu</li>
          <li className="text-base cursor-pointer text-textColor hover:text-headingColor ease-in-out duration-100 transition-all ">About</li>
          <li className="text-base cursor-pointer text-textColor hover:text-headingColor ease-in-out duration-100 transition-all ">Contact Us</li>
        </ul>
        <div className="flex gap-x-8">
          <div className="relative flex items-center " onClick={showCart}>
            <FaShoppingBasket className="cursor-pointer text-2xl ml-8" />
            {cartItems?.length > 0 && (
            <div className="absolute -top-0 -right-2 bg-cartNumBg items-center justify-center flex h-4 w-4 rounded-full">
              <p className="text-white text-xs font-semibold">{cartItems.length}</p>
            </div>
            )}
          </div>
          <div className="cursor-pointer" onClick={login}>
            <Avatar
              size={40}
              name={user ? user.displayName : 'hahahaha'}
              variant="beam"
              colors={['#FFAD08', '#0C8F8F', '#F0AB3D', '#EDD75A', '#C20D90']}
            />

            {isMenu && (
            <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className="flex flex-col w-48 shadow-xl absolute bg-gray-50 p-2  rounded-lg top-20 right-4 text-base">
              {user && user.email === 'jocxyen@gmail.com' && <Link to="/create"><p className="px-4 py-2 gap-3 cursor-pointer items-center flex hover:bg-slate-200 transition-all ease-in-out duration-100">New Product<MdAdd /> </p></Link>}

              <p className="px-4 py-2 gap-3 cursor-pointer items-center flex hover:bg-slate-200 transition-all ease-in-out duration-100" onClick={logout}>Logout <MdLogout /> </p>
            </motion.div>
            )}
          </div>
        </div>

      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">

        <div className="relative flex items-center" onClick={showCart}>
          <FaShoppingBasket className="cursor-pointer text-2xl ml-2" />
          <div className="absolute -top-0 -right-2 bg-cartNumBg items-center justify-center flex h-4 w-4 rounded-full">
            <p className="text-white text-xs font-semibold">{cartItems.length}</p>
          </div>
        </div>
        <Link to="/" className="flex items-center">
          <p className="font-extrabold text-2xl">PizzaHub</p>
        </Link>
        <div className="cursor-pointer" onClick={login}>
          <Avatar
            size={45}
            name={user ? user.displayName : 'hahahaha'}
            variant="beam"
            colors={['#FFAD08', '#0C8F8F', '#F0AB3D', '#EDD75A', '#C20D90']}
          />

          {isMenu && (
            <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className="flex flex-col w-48 shadow-xl absolute bg-gray-50 p-2  rounded-lg top-20 right-4 text-base">
              {user && user.email === 'jocxyen@gmail.com' && <Link to="/create"><p className="px-4 py-3 gap-3 cursor-pointer items-center flex  text-textColor hover:text-headingColor ease-in-out duration-100 transition-all">New Product<MdAdd /> </p></Link>}

              <ul className="px-4 py-2 flex flex-col gap-8 ">
                <li className="text-base cursor-pointer text-textColor hover:text-headingColor ease-in-out duration-100 transition-all ">Home</li>
                <li className="text-base cursor-pointer text-textColor hover:text-headingColor ease-in-out duration-100 transition-all ">Menu</li>
                <li className="text-base cursor-pointer text-textColor hover:text-headingColor ease-in-out duration-100 transition-all ">About</li>
                <li className="text-base cursor-pointer text-textColor hover:text-headingColor ease-in-out duration-100 transition-all ">Contact Us</li>
              </ul>
              <p className="px-4 py-3 bg-slate-200 gap-3 cursor-pointer items-center flex text-textColor hover:text-headingColor ease-in-out duration-100 transition-all rounded-md" onClick={logout}>Logout <MdLogout /> </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
