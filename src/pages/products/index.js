import React from 'react';
import {ProductCard} from "./components/product-card";
import {allProducts} from "./list";
import style from './index.module.scss'
export const Products = () => {
    return (
        <div className={style.cardGrid}>
            {allProducts.map((productList)=>{
            return (
                productList.map(product=>{
                    return(
                        <ProductCard name={product.name} img={product.img} description={product.description} price={product.price}/>
                    )
                }
            ))
            })
            }



        </div>
    );
};
