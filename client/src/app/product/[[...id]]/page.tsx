'use client';

import { useGetProduct } from '@/api/getProduct';
import ProductModules from '@/modules/Product';
import React from 'react';

const Product = ({ params }: any): React.ReactElement => {
  const { products } = useGetProduct();
  const [productId] = params.id;
  const product = products.find(item => item._id === productId);
  return <>{product && <ProductModules data={product} />}</>;
};

export default Product;
