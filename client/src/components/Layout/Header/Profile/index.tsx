import React, { useState } from 'react';
import s from './styles.module.scss';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLogoutMutation } from '@/store/slices/usersApiSlice';
import { logout } from '@/store/slices/authSlice';

const ProfileHeader = ({ data }: { data: any }) => {
  const [optionState, setOptionState] = useState<boolean>(false);
  const [logoutApiCall] = useLogoutMutation();
  const { name } = data;

  const dispatch = useDispatch();
  const router = useRouter();

  const toggleOptionBox = () => {
    setOptionState(!optionState);
  };

  const logoutHandler = async () => {
    try {
      // @ts-ignore:next-line
      await logoutApiCall().unwrap();
      // @ts-ignore:next-line
      dispatch(logout());
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
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
