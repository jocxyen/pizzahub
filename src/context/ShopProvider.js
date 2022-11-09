import React, { createContext, useContext, useReducer } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getAllItems } from '../utils/firebaseFunctions';
import { initialState } from './initialState';
import ShopReducer, { actionType } from './ShopReducer';
import { app } from '../firebase';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShopReducer, initialState);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    // eslint-disable-next-line no-unused-vars
    const { user: { refreshToken, providerData } } = await signInWithPopup(auth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
    localStorage.setItem('user', JSON.stringify(providerData[0]));
  };

  const signOut = () => {
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const getAllFood = async () => {
    await getAllItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD,
        foodItems: data,
      });
    });
  };

  const setCartShow = (status) => {
    dispatch({
      type: actionType.SET_SHOW_CART,
      cartShow: status,
    });
  };

  const value = {
    user: state.user,
    foodItems: state.foodItems,
    cartShow: state.cartShow,
    cartItems: state.cartItems,
    getAllFood,
    signIn,
    signOut,
    setCartShow,
  };

  return (

    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error('useShop must be used within ShopContext');
  }

  return context;
};

export default useShop;

