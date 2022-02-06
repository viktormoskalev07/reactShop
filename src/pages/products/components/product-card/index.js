import React from 'react';
import style from './index.module.scss'
export const ProductCard = ({name,price,description,img}) => {
    return (
        <div className={style.card}>
            <p className="name">
                {name}
            </p>
            <img src={"images/"+img} alt={name} className="img"/>
            <div className="content">
                <p className="description">
                    {description}
                </p>
                <span className="price">
                    {price}
                </span>
            </div>
        </div>
    );
};

