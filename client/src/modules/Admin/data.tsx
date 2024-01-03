import AdminOrderList from './Content/OrderList';
import AdminUserList from './Content/UserList';

export const tabData = [
  {
    id: 0,
    name: 'Orders List',
    key: 'orderlist',
    content: <AdminOrderList />,
  },
  {
    id: 1,
    name: 'Users List',
    key: 'userList',
    content: <AdminUserList />,
  },
];
