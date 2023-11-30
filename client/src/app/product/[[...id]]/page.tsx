'use client';
import { products } from '@/constants/product';
import ProductModules from '@/modules/Product';
import React from 'react';

const Product = ({ params }: any): React.ReactElement => {
  const [productId] = params.id;
  const product = products.find(item => item.id === Number(productId));
  return <>{product && <ProductModules data={product} />}</>;
};

export default Product;
