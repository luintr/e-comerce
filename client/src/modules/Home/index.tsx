import React from 'react';
import s from './style.module.scss';
import HeroSection from './Hero';
import CollectionSecion from './Collection';
import BestSellerSection from './BestSeller';

const HomeModule = (): React.ReactElement => {
  return (
    <div className={s.hompage}>
      <HeroSection />
      <CollectionSecion />
      <BestSellerSection />
    </div>
  );
};

export default HomeModule;
