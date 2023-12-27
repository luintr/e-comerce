import React, { useEffect, useState } from 'react';
import s from './style.module.scss';
import { getOrderDetail } from '@/api/orderAPI';
import { useSelector } from 'react-redux';

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
        <div>
          <p>
            <strong>Order Items</strong>
          </p>
          <div>
            {orderData.orderItems.map(item => (
              <div key={item._id} className={s.orderItem}>
                <img src={item.image} alt="image" />
                <p>{item.name}</p>
                <p>Qty: {item.qty}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`col-span-6`}>
        <p>Order Summary</p>
        <p>
          <strong>Items Price:</strong> ${orderData.itemsPrice}
        </p>
        <p>
          <strong>Shipping:</strong>{' '}
          {orderData.shippingPrice == 0
            ? 'Free Ship'
            : `$${orderData.shippingPrice}`}
        </p>
        <p>
          <strong>Tax:</strong> ${orderData.taxPrice}
        </p>
        <p>
          <strong>Total Price:</strong> ${orderData.totalPrice}
        </p>
      </div>
    </div>
  );
};

export default OrderModule;
