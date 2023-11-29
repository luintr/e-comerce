import React from 'react';
import s from './style.module.scss';
import { products } from '@/constants/product';
import ProductItem from './ProductItem';

const ProductList = (): React.ReactElement => {
  return (
    <div className={`${s.productList} grid grid-cols-12`}>
      {products.map(item => (
        <ProductItem key={item._id} data={item}/>
      ))}
    </div>
  );
};

export default ProductList;
