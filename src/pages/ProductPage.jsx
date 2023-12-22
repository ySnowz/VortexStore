import React from 'react';
import { useParams } from 'react-router-dom';
import productsStock from '../data/productsStock.json';

const ProductPage = () => {

  const ProductContainer = "w-full flex flex-col items-center justify-center mt-4";
  const ImageProductContainer = "flex flex-col items-center justify-center drop-shadow-sm";
  const ImageProduct = "w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-sm";
  const ProductInfosContainer = "w-[250px] md:w-[500px] flex flex-col items-start justify-center gap-2";
  const ProductName = "text-xl md:text-4xl text-slate-800 font-medium uppercase";
  const ProductDescription = "text-[12px] md:text-[16px] text-slate-500/50 font-normal capitalize";
  const ProductPrice = "text-md font-normal text-purple-400";
  const ProductBTN = "w-full px-4 py-2 bg-gradient-to-b from-purple-500 to-purple-600 rounded-sm text-white font-bold duration-100 ease-in active:scale-95 hover:scale-105"

  const { id } = useParams()
  const findProduct = productsStock.find(product => product.id === Number(id));

  return (
    <section className={ProductContainer}>
      <div className={ImageProductContainer}>
        <figure>
          <img className={ImageProduct} src={findProduct.url} alt={findProduct.name} />
        </figure>
      </div>
      <div className={ProductInfosContainer}>
        <h2 className={ProductName}>{findProduct.name}</h2>
        <img src={findProduct.rating} alt="rating" />
        <h3 className={ProductDescription}>{findProduct.description}</h3>
        <p className={ProductPrice}>${findProduct.price}</p>
        <button className={ProductBTN}>ADD TO CART</button>
      </div>
    </section>
  )
}

export default ProductPage;
