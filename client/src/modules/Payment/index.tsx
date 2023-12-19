'use client';

import React, { useEffect, useState } from 'react';
import s from './style.module.scss';
import { Button, Form, Input, Radio, Space, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { paymentMethod } from '@/constants/method';
import {
  savePaymentMethod,
  saveShippingAddress,
} from '@/store/slices/cartSlice';

const PaymentModule = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch();
  const router = useRouter();
  const localUser = localStorage.getItem('userInfo');

  useEffect(() => {
    if (!localUser) {
      router.push('/login');
    }
  }, [localUser, router]);

  // @ts-ignore:next-line
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const onFinish = async (values: any) => {
    dispatch(saveShippingAddress(values));
    dispatch(savePaymentMethod(value));
    router.push('/payment');
  };
  return (
    <div className={`${s.shipping} container grid grid-cols-12`}>
      <h1>Shipping</h1>

      <div className={`${s.shippingForm} col-span-12`}>
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

          <Radio.Group onChange={onChange} value={value}>
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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PaymentModule;
