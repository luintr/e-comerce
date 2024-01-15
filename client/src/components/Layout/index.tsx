'use client';
import React, { ReactNode } from 'react';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '@/store/store';
import s from './style.module.scss';
import Footer from './Footer';
import { GridDebug } from './GridDebug';
import CartModel from '../CartModel';

type ILayout = {
  children: ReactNode;
  className: string;
};

const Layout = ({ children, className }: ILayout) => {
  return (
    <Provider store={store}>
      <body className={`${className} ${s.mainLayout}`}>
        <Header />
        {children}
        <Footer />
        <CartModel />
        <GridDebug />
      </body>
    </Provider>
  );
};

export default Layout;
