import React from 'react';
import {useSelector} from 'react-redux';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import styles from './index.module.scss';

const Basked = () => {
  const products = useSelector((store) => store.basket.products);
  return (
    <span className={styles.basket}>
      {products.length} <ShoppingBasketIcon/>
    </span>
  );
};

export default Basked;
