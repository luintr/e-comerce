'use client';

import React from 'react';
import s from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, message } from 'antd';
import { profile } from '@/api/userAPI';
import { setCredentials } from '@/store/slices/authSlice';
const ProfileModule = () => {
  const [messageApi, contextHolder] = message.useMessage();

  // @ts-ignore:next-line
  const { userInfo } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const onFinish = async (value: any) => {
   
    try {
      const res = await profile({
        _id: userInfo._id,
        name: value.name,
        email: value.email,
        password: value.password,
      });
      dispatch(setCredentials(res));
      messageApi.open({
        type: 'success',
        content: 'Profile updated successfully',
        duration: 4,
      });
    } catch (err) {
      messageApi.open({
        type: 'error',
        content: 'Something went wrong',
        duration: 4,
      });
    }
  };

  return (
    <div className={`${s.profile} container grid grid-cols-12`}>
      {contextHolder}
      <h1 className={`col-span-12`}>ProfileModule</h1>
      <Form
        name="basic"
        initialValues={{
          remember: true,
          email: userInfo?.email,
          name: userInfo?.name,
        }}
        onFinish={onFinish}
        autoComplete="on"
        className={`col-span-12`}
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input autoComplete="email" disabled={true} />
        </Form.Item>

        <Form.Item
          name="name"
          label="Name"
          tooltip="What do you want others to call you?"
          rules={[
            {
              message: 'Please input your name!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password autoComplete="new-password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password autoComplete="new-password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileModule;
