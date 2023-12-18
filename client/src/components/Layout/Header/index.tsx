'use client';

import Container from '@/components/Container';
import React, { useEffect, useState } from 'react';
import s from './style.module.scss';
import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';
import { titleFont } from '@/utils/fonts';
import { useSelector } from 'react-redux';

const Header = (): React.ReactElement => {
  const [qtyItems, setQtyItems] = useState<[]>([]);
  // @ts-ignore:next-line
  const { cartItems } = useSelector(state => state.cart);

  useEffect(() => {
    setQtyItems(cartItems);
  }, [cartItems]);
  return (
    <header className={s.header}>
      <Container className={s.header_container}>
        <Link
          href={ROUTE_PATH.HOME}
          className={`${s.logo} ${titleFont.className}`}
        >
          La casa de papel
        </Link>
        <div className={s.navigate}>
          <Link href={'/cart'} className={s.navigate_item}>
            Cart
            {qtyItems.length > 0 && <span>{qtyItems.length}</span>}
          </Link>
          <Link href={ROUTE_PATH.LOGIN} className={s.navigate_item}>
            Sign In
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
