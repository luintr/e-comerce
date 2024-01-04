import { getProductDetail, updateProduct } from '@/api/productAPI';
import { Button, Form, Input, InputNumber, message } from 'antd';
import React, { useEffect, useState } from 'react';

type IProductEdit = {
  productID: string;
  setEditMode: (state: boolean) => void;
};

type IDetail = {
  _id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  category: string;
  countInStock: number;
  description: string;
};

const ProductEdit = ({ productID, setEditMode }: IProductEdit) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [detail, setDetail] = useState<IDetail | null>(null);

  useEffect(() => {
    getProductDetail(productID).then((res: any) => {
      setDetail(res.data);
    });
  }, []);

  console.log(detail);

  const onFinish = async (value: any) => {
    console.log(detail?._id);
    const updatedProduct = {
      _id: detail?._id,
      name: value.name,
      price: value.price,
      image: value.image,
      brand: value.brand,
      category: value.category,
      countInStock: value.countInStock,
      description: value.description,
    };

    const result = await updateProduct(updatedProduct);
    messageApi.open({
      type: 'success',
      content: 'Product Updated',
      duration: 4,
    });
    setEditMode(false);
  };

  return (
    <div className={`col-span-12`}>
      {contextHolder}
      <div className={`col-span-12`}>
        <button onClick={() => setEditMode(false)}>Go Back</button>
      </div>
      {detail && (
        <Form
          name="basic"
          initialValues={{
            name: detail.name,
            price: detail.price,
            image: detail.image,
            brand: detail.brand,
            category: detail.category,
            countInStock: detail.countInStock,
            description: detail.description,
          }}
          onFinish={onFinish}
          className={`col-span-12`}
        >
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>

          <Form.Item name="price" label="Price">
            <InputNumber />
          </Form.Item>

          <Form.Item name="image" label="Image">
            <Input />
          </Form.Item>

          <Form.Item name="brand" label="Brand">
            <Input />
          </Form.Item>

          <Form.Item name="category" label="Category">
            <Input />
          </Form.Item>

          <Form.Item name="countInStock" label="Count In Stock">
            <InputNumber />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default ProductEdit;
