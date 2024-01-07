import React from 'react';
import s from './style.module.scss';

const HomeModule = (): React.ReactElement => {
  return (
    <div className={s.hompage}>
      <div className={`${s.container} container`}>
        <h1>Home Module</h1>
      </div>
    </div>
  );
};

export default HomeModule;
