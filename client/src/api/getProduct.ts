import { IProductItem } from "@/modules/Home/ProductList/ProductItem";
import { useEffect, useState } from "react";

import { get } from '@Api/requestMethod';

export const useGetProduct = () => {
  const [products, setProducts] = useState<IProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await get<IProductItem[]>('api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading }
}