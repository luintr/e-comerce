import React from 'react';
import s from './style.module.scss';
import HeroSection from './Hero';
import CollectionSecion from './Collection';

const HomeModule = (): React.ReactElement => {
  return (
    <div className={s.hompage}>
      <HeroSection />
      <CollectionSecion />
    </div>
  );
};

export default HomeModule;
