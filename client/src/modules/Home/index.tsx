import React from 'react';
import s from './style.module.scss';
import HeroSection from './Hero';
import CollectionSecion from './Collection';
import BestSellerSection from './BestSeller';
import SeasonSection from './Season';

const HomeModule = (): React.ReactElement => {
  return (
    <div className={s.hompage}>
      <HeroSection />
      <CollectionSecion />
      <BestSellerSection />
      <SeasonSection />
    </div>
  );
};

export default HomeModule;
