'use client';
import React, { ReactNode } from 'react';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '@/store/store';

type ILayout = {
  children: ReactNode;
  className: string;
};

const Layout = ({ children, className }: ILayout) => {
  return (
    <Provider store={store}>
      <body className={className}>
        <Header />
        {children}
      </body>
    </Provider>
  );
};

export default Layout;
