'use client';

import Container from '@/components/Container';
import React, { useEffect, useState } from 'react';
import s from './style.module.scss';
import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';
import { useSelector } from 'react-redux';
import ProfileHeader from './Profile';
import { playfairFont } from '@/utils/fonts';
import { CartIcon } from '@/components/Icons';

const Header = (): React.ReactElement => {
  const [qtyItems, setQtyItems] = useState<[]>([]);
  const [user, setUser] = useState({});
  // @ts-ignore:next-line
  const { cartItems } = useSelector(state => state.cart);
  // @ts-ignore:next-line
  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  useEffect(() => {
    setQtyItems(cartItems);
  }, [cartItems]);
  return (
    <header className={s.header}>
      <Container className={s.header_container}>
        <Link
          href={ROUTE_PATH.HOME}
          className={`${s.logo} ${playfairFont.className}`}
        >
          DER MOND
        </Link>
        <div className={s.navigate}>
          <Link href={'/service'} className={s.navigate_item}>
            OUR STORY
          </Link>
          <Link href={'/gallery'} className={s.navigate_item}>
            GALLERY
          </Link>
          <Link href={'/shop'} className={s.navigate_item}>
            Shop
          </Link>
          {user ? (
            <ProfileHeader data={user} />
          ) : (
            <Link href={ROUTE_PATH.LOGIN} className={s.navigate_item}>
              Sign In
            </Link>
          )}
          <Link href={'/cart'} className={s.navigate_item}>
            <CartIcon />
            {qtyItems.length > 0 && (
              <span className={s.navigate_item_cartQtr}>{qtyItems.length}</span>
            )}
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
