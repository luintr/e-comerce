import React from 'react';
import s from './style.module.scss';
import ProductList from './ProductList';

const ShopModule = () => {
  return (
    <div className={s.shopModule}>
      <div className={`${s.container} container`}>
        <h1>Lastest Product</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default ShopModule;
