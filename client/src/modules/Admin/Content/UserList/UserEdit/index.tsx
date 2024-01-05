import React from 'react';

type IUserEdit = {
  userID: string;
  setUserEditMode: (state: boolean) => void;
};

const AdminUserEdit = ({ userID, setUserEditMode }: IUserEdit) => {
  return <div>AdminUserEdit</div>;
};

export default AdminUserEdit;
