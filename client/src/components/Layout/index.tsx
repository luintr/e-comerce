'use client';
import React, { ReactNode } from 'react';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '@/store/store';
import s from './style.module.scss';
import Footer from './Footer';
import { GridDebug } from './GridDebug';
import CartModel from '../CartModel';
import { useModelStore } from '@/store/zustandStore';

type ILayout = {
  children: ReactNode;
  className: string;
};

const Layout = ({ children, className }: ILayout) => {
  const { modelState } = useModelStore();

  return (
    <Provider store={store}>
      <body
        className={`${className} ${s.mainLayout} ${modelState && s.overflow}`}
      >
        <Header />
        {children}
        <Footer />
        <CartModel />
        {process.env.NODE_ENV === 'development' && <GridDebug />}
      </body>
    </Provider>
  );
};

export default Layout;
