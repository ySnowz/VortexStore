import React from 'react'
import productsStock from "../data/productsStock.json"
import rating from "../../public/rating.svg"

const Products = () => {

    const ProductContainerStyle = "w-full flex flex-row flex-wrap items-center justify-center gap-4"
    const ProductCardStyle = "w-[200px] md:w-[220px] p-2 rounded-sm flex flex-col drop-shadow-sm bg-purple-50/50 duration-100 linear hover:scale-105 hover:border hover:border-purple-400 hover:drop-shadow-md"
    const ProductImageStyle = "w-[180px] h-[180px] md:w-[200px] md:h-[200px] flex flex-row items-center justify-center";
    const ProductInfoStyle = "w-full flex flex-row justify-between items-center mb-1";
    const ProductPriceStyle = "text-[12px] text-purple-500 font-semibold";
    const ProductNameStyle = "font-semibold text-sm text-slate-800 uppercase";
    const ProductDescriptionStyle = "font-light text-[12px] text-slate-600";
    const flexCenterXY = "flex items-center justify-center"

    return (
        <div className={ProductContainerStyle}>
            {productsStock.map((product) => (
                <div className={ProductCardStyle} key={product.id}>
                    <div className={flexCenterXY}>
                        <figure className={ProductImageStyle}><img src={product.url} alt={product.name} /></figure>
                    </div>
                    <div className={ProductInfoStyle}>
                        <img src={rating} alt="rating" />
                        <span className={ProductPriceStyle}>${product.price}</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h2 className={ProductNameStyle}>{product.name}</h2>
                        <h3 className={ProductDescriptionStyle}>{product.description}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products
