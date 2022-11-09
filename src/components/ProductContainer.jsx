import React, { useState } from 'react';
import ProductCard from './ProductCard';
import useShop from '../context/ShopProvider';
import { categories } from '../utils/data';

const ProductContainer = () => {
  const { foodItems } = useShop();
  const [currentSelection, setCurrentSelection] = useState('pizzas');
  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <div className="p-2 flex lg:gap-6 m-2 mx-auto self-center mb-16 mt-0 border-2 border-orange-300 rounded-full gap-2">
        {categories && categories.map((c) => <div className={`rounded-full p-1 hover:bg-orange-400 font-bold hover:text-white flex text-center lg:p-2 lg:px-5 cursor-pointer ${currentSelection === c.urlParamName && 'bg-orange-600'} ${currentSelection === c.urlParamName && 'text-white'}`} onClick={() => setCurrentSelection(c.urlParamName)}><p className=" " key={c.id}>{ c.name}</p></div>)}
      </div>
      <div className="flex flex-wrap flex-row w-full gap-4 p-4 justify-center items-center">
        {foodItems && foodItems.length > 0 ? foodItems.filter((i) => i.category === currentSelection).map((i) => <ProductCard key={i.id} i={i} />) : <p>No products found</p>}
      </div>
    </section>
  );
};

export default ProductContainer;
