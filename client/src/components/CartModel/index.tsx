import React from 'react';
import s from './style.module.scss';
import { useModelStore } from '@/store/zustandStore';

const CartModel = () => {
  const { modelState } = useModelStore();

  return (
    <div className={`${s.cartModel} ${modelState ? s.active : null}`}>
      CartModel
    </div>
  );
};

export default CartModel;
