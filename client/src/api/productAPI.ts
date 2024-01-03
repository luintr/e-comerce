import { PRODUCTS_URL } from "@/constants/route"
import { get, post, put } from "./requestMethod"

export const getProduct = async () => {
  const res = await get(`${PRODUCTS_URL}`)
  return res
}

export const getProductDetail = async (productId: string | number) => {
  const res = await get(`${PRODUCTS_URL}/${productId}`)
  return res
}
export const createProduct = async () => {
  const res = await post(`${PRODUCTS_URL}`)
  return res
}

export const updateProduct = async (data: any) => {
  const res = await put(`${PRODUCTS_URL}/${data._id}`, data)
  return res
}