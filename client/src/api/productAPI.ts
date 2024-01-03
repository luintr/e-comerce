import { PRODUCTS_URL } from "@/constants/route"
import { get, post } from "./requestMethod"

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