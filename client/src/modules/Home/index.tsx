import React from 'react';
import s from './style.module.scss';
import HeroSection from './Hero';

const HomeModule = (): React.ReactElement => {
  return (
    <div className={s.hompage}>
      <HeroSection />
    </div>
  );
};

export default HomeModule;
