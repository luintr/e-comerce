'use client';

import React, { useEffect, useState } from 'react';
import s from './style.module.scss';
import ProductItem, { IProductItem } from './ProductItem';

import { get } from '@Api/requestMethod';

const ProductList = (): React.ReactElement => {
  const [products, setProducts] = useState<IProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await get<IProductItem[]>('api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={`${s.productList} grid grid-cols-12`}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map(product => {
          return <ProductItem key={product.id} data={product} />;
        })
      )}
    </div>
  );
};

export default ProductList;
