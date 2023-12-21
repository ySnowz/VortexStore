import React from 'react'
import Products from '../components/Products';

const MainSection = () => {

  const ProductsSection = "w-full h-full flex flex-col items-start justify-start gap-4 tracking-wider px-6 md:px-8";
  const ProductText = "text-2xl md:text-4xl uppercase font-normal tracking-wider text-slate-700";

  return (
    <section className={ProductsSection}>
      <h2 className={ProductText}>Most Saled</h2>
      <Products/>
    </section>
  )
};

export default MainSection;
