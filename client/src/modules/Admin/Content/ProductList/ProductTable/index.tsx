import { createProduct, deleteProduct, getProduct } from '@/api/productAPI';
import { IProduct } from '@/constants/product';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react';

type IProductTable = {
  setProductID: (id: string) => void;
  setEditMode: (state: boolean) => void;
};

const ProductTable = ({ setProductID, setEditMode }: IProductTable) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [changeFlag, setChangeFlag] = useState<boolean>(false);

  useEffect(() => {
    getProduct().then((res: any) => {
      setProducts(res.data);
    });
  }, [changeFlag]);

  const deleteHandler = async (id: string | number) => {
    await deleteProduct(id);
    setChangeFlag(!changeFlag);
  };

  const editHandler = (id: string) => {
    setEditMode(true);
    setProductID(id);
  };

  const createProductHandler = async () => {
    try {
      await createProduct();
      setChangeFlag(!changeFlag);
      setTimeout(() => {
        setChangeFlag(!changeFlag);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
      render: (text: string) => {
        const shortenedString = text.substring(0, 15);
        return `${shortenedString}...`;
      },
      width: '20%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text: number) => `$${text}`,
      width: '15%',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '15%',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
      width: '15%',
    },
    {
      title: '',
      dataIndex: '_id',
      key: '_id',
      render: (text: string, record: IProduct) => (
        // @ts-ignore:next-line
        <button onClick={() => editHandler(record._id)}>Edit</button>
      ),
      width: '3%',
    },
    {
      title: '',
      dataIndex: '_id',
      key: '_id',
      render: (text: string, record: IProduct) => (
        // @ts-ignore:next-line
        <button onClick={() => deleteHandler(record._id)}>Delete</button>
      ),
      width: '3%',
    },
  ];
  return (
    <div className={`col-span-12 grid grid-cols-12`}>
      <div className={`col-span-12`}>
        <button onClick={createProductHandler}>Create Product</button>
      </div>
      <Table
        className={`col-span-12`}
        columns={columns}
        dataSource={products}
        rowKey="_id"
      />
    </div>
  );
};

export default ProductTable;
