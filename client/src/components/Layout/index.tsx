'use client';
import React, { ReactNode } from 'react';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '@/store/store';
import s from './style.module.scss';

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
      </body>
    </Provider>
  );
};

export default Layout;
