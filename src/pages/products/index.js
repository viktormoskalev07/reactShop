import React from 'react';
import {ProductCard} from './components/product-card';
import {ProductsByName} from './list';
import style from './index.module.scss';

export const Products = () => {
  const allProducts = [];
  for (const item in ProductsByName) {
    if ({}.hasOwnProperty.call(ProductsByName, item)) {
      allProducts.push(ProductsByName[item]);
    }
  }
  return (
    <>
      <div className="container">
        <h1> All products </h1>
        <div className={style.cardGrid}>
          {allProducts.map((productList) => {
            return (
              productList.map((product) => {
                return (
                  <ProductCard key={product.name}
                    name={product.name} img={product.img}
                    description={product.description} price={product.price}/>
                );
              },
              ));
          })
          }
        </div>

      </div>
    </>

  );
};

export const SingleProductPage = ({title, list}) => {
  console.log(list);
  return (
    <>
      <div className="container">
        <h1>{title}    </h1>
        <div className={style.cardGrid}>
          {list?.map((product) => {
            return (
              <ProductCard key={product.name} name={product.name} img={product.img}
                description={product.description}
                price={product.price}/>
            );
          })}
        </div>
      </div>
    </>
  );
};
