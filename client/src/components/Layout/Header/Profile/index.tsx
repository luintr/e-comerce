import React, { useState } from 'react';
import s from './styles.module.scss';
import Link from 'next/link';

const ProfileHeader = ({ data }: { data: any }) => {
  const [optionState, setOptionState] = useState<boolean>(false);
  const { name } = data;

  const toggleOptionBox = () => {
    setOptionState(!optionState);
  };

  const logoutHandler = () => {
    console.log('logout');
  };
  return (
    <div className={s.profile}>
      <div className={s.profileTitle} onClick={toggleOptionBox}>
        {name}
      </div>

      <ul className={`${s.profileOptions} ${optionState ? s.open : ''}`}>
        <li>
          <Link href={'/profile'} className={s.profileOptions_item}>
            Profile
          </Link>
        </li>
        <li>
          <span className={s.profileOptions_item} onClick={logoutHandler}>
            Log out
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileHeader;
