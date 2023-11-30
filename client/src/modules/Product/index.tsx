'use client';

import React from 'react';

type IProduct = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
};

const ProductModules = ({ data }: { data: IProduct }) => {
  const {
    name,
    image,
    description,
    price,
    countInStock,
    rating,
    numReviews,
  } = data;
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
        <div>
          <div>rate: {rating}</div>
          <div>{numReviews}</div>
        </div>
        <div>price: ${price}</div>
        <div>desc: {description}</div>
      </div>

      <div>
        status: {countInStock > 0 ? 'Out of stock': 'In stock'}
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductModules;
