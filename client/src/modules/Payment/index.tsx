'use client';

import React, { useEffect, useState } from 'react';
import s from './style.module.scss';
import { Button, Form, Input, Radio, Space, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { paymentMethod } from '@/constants/method';
import {
  clearCartItems,
  savePaymentMethod,
  saveShippingAddress,
} from '@/store/slices/cartSlice';
import Link from 'next/link';
import { createOrder } from '@/api/orderAPI';

const PaymentModule = () => {
  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch();
  const router = useRouter();

  const data =
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem('cart') || '{}');
  const { cartItems, itemsPrice, shippingPrice, taxPrice, totalPrice } = data;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localUser = localStorage.getItem('userInfo');
      const localCart = localStorage.getItem('cart');
      if (!localUser || !localCart) {
        router.push('/login');
      }
    }
  }, [router]);

  const onChangeRadio = (e: any) => {
    setValue(e.target.value);
  };

  const onFinish = async (values: any) => {
    dispatch(saveShippingAddress(values));
    dispatch(savePaymentMethod(value));

    try {
      const res = await createOrder({
        orderItems: data.cartItems,
        shippingAddress: values,
        paymentMethod: value,
        itemsPrice: data.itemsPrice,
        taxPrice: data.taxPrice,
        shippingPrice: data.shippingPrice,
        totalPrice: data.totalPrice,
      });
      dispatch(clearCartItems());
      // @ts-ignore:next-line
      router.push(`order/${res._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${s.shipping} container grid grid-cols-12`}>
      <h1 className={`col-span-12`}>Shipping</h1>

      <div className={`${s.shippingForm} col-span-6`}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="on"
          className={``}
        >
          <Form.Item
            label="Name"
            name="name"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone number"
            name="number"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your number!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your address!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your city!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Postal Code"
            name="postalCode"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your postal code!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Country"
            name="country"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your country!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Radio.Group onChange={onChangeRadio} value={value}>
            <Space direction="vertical">
              {paymentMethod.map((item, index) => (
                <Radio key={index} value={item.value}>
                  {item.title}
                </Radio>
              ))}
            </Space>
          </Radio.Group>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Place an order
            </Button>
          </Form.Item>
        </Form>
        {/* {isLoading && <p>Loading ...</p>} */}
      </div>

      <div className={`col-span-6`}>
        {cartItems.map((item: any, index: number) => (
          <div key={index} className={s.orderItem}>
            <img src={item.image} alt={item.name} />
            <Link href={`/product/${item._id}`}>{item.name}</Link>
            <p>
              Price: ${item.price} X {item.qty}
            </p>
          </div>
        ))}
        <div className={s.sumary}>
          <p>Subtotal: ${itemsPrice}</p>
          <p>Shipping: {shippingPrice == 0 ? 'Free ship' : shippingPrice}</p>
          <p>Tax: {taxPrice}</p>
          <p>Total: {totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModule;
