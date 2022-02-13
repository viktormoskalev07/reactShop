import React from 'react';
import styles from './index.module.scss';
import {useSelector} from 'react-redux';

export const BasketModal = ({onClose}) => {
  const products = useSelector((store) => store.basket.products);
  return (
    <div className={styles.modal}>

      <li className={'item'}>
        <span> img</span>
        <span> name</span>
        <b>price</b>
      </li>

      <ul>
        {products.map((item) => {
          return (
            <li className={'item'} key={item.name}>
              <img className={'img'} src={'/images/' + item.img} alt={item.name}/>
              <p className={'name'}>{item.name}</p>
              <p className={'price'}>{item.price}</p>
            < /li>
          );
        })}
        <p className="total"><span className={'text'}> total price:</span>
          <b>
            {products.reduce((previousValue, currentValue) => (
              Number(previousValue.price) + Number(currentValue.price)
            ))}
          </b></p>
      </ul>

    </div>
  );
};
