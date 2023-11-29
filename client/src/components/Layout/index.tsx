import React, { ReactNode } from 'react';
import Header from './Header';
type ILayout = {
  children: ReactNode;
  className: string;
};

const Layout = ({ children, className }: ILayout) => {
  return (
    <body className={className}>
      <Header />
      {children}
    </body>
  );
};

export default Layout;
