'use client';

import React from 'react';
import s from './style.module.scss';
import ProductItem from './ProductItem';
import { useGetProduct } from '@/api/getProduct';

const ProductList = (): React.ReactElement => {
  const { products, loading } = useGetProduct();
  return (
    <div className={`${s.productList} grid grid-cols-12`}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map(product => {
          return <ProductItem key={product._id} data={product} />;
        })
      )}
    </div>
  );
};

export default ProductList;
