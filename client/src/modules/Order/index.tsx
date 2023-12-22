import React, { useEffect, useState } from 'react';
import s from './style.module.scss';
import { getOrderDetail } from '@/api/orderAPI';

type IOrderItem = {
  image: string;
  name: string;
  price: number;
  product: string;
  qty: number;
  _id: string;
};

type IShippingAddress = {
  address: string;
  city: string;
  country: string;
  postalCode: string;
};

type IUser = {
  _id: string;
  email: string;
  name: string;
};

type OrderData = {
  _id: string;
  isDelivered: boolean;
  isPaid: boolean;
  itemsPrice: number;
  orderItems: IOrderItem[];
  paymentMethod: string;
  shippingAddress: IShippingAddress;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  updatedAt: string;
  user: IUser;
  deliveredAt: string;
  paidAt: string;
};

const OrderModule = ({ orderID }: { orderID: string }) => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    getOrderDetail(orderID).then((res: any) => {
      setOrderData(res);
    });
  }, []);
  console.log(orderData);

  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${s.orderPaypal} container grid grid-cols-12`}>
      <div className={`col-span-6`}>
        <p>Order {orderData._id}</p>
        <div>
          <p>Shipping</p>
          <p>Name: {orderData.user.name}</p>
          <p>Email: {orderData.user.email}</p>
          <p>
            Address: {orderData.shippingAddress.address},{' '}
            {orderData.shippingAddress.city},{' '}
            {orderData.shippingAddress.postalCode},{' '}
            {orderData.shippingAddress.country}
          </p>
          <div>
            {orderData.isDelivered ? (
              <p>{orderData.deliveredAt}</p>
            ) : (
              <p>Not Delivered</p>
            )}
          </div>
          <div>
            <p>
              <strong>Method:</strong> {orderData.paymentMethod}
            </p>
            {orderData.isPaid ? (
              <p>Paid on: {orderData.paidAt}</p>
            ) : (
              <p>Not Paid</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModule;
