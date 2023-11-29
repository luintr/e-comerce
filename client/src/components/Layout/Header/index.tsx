import Container from '@/components/Container';
import React from 'react';
import s from './style.module.scss';
import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';
import { titleFont } from '@/utils/fonts';

const Header = (): React.ReactElement => {
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
          <div className={s.navigate_item}>Cart</div>
          <div className={s.navigate_item}>Sign In</div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
