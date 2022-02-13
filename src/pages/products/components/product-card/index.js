import React from 'react';
import style from './index.module.scss';
import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {add} from '../../../../fetures/basket/basket-slice';

export const ProductCard = ({name, price, description, img}) => {
  const dispatch = useDispatch();
  const shopAction = () => {
    dispatch(add({name, price, img}));
  };
  return (
    <div className={style.card}>
      <p className="name">

      </p>
      <figure className="img">
        <img src={'images/' + img} alt={name}/>
      </figure>

      <div className="content">
        <p className="description">
          {description}
        </p>

        <div className="price">
          <span>  price - </span> <span> {price}$</span>
        </div>
        <Button onClick={shopAction} variant="contained"> by now</Button>
      </div>
    </div>
  );
};

