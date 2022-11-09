import React, { useEffect } from 'react';

import useShop from '../context/ShopProvider';
import Cart from './Cart';
import Hero from './Hero';
import ProductContainer from './ProductContainer';

const MainContainer = () => {
  const { cartShow } = useShop();
  useEffect(() => { console.log(cartShow); }, [cartShow]);
  return (
    <div className="flex flex-col  h-auto w-full overflow-hidden">
      <Hero />
      <section className="w-full ">
        <div className="flex flex-col justify-center items-center w-full ">
          <p className="mt-6 text-5xl font-extrabold mb-12">Популярні страви</p>
          <ProductContainer />
          {cartShow && (<Cart />)}
        </div>

      </section>

    </div>
  );
};
export default MainContainer;
 