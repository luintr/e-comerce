import { ORDERS_URL } from "@/constants/route"
import { get, post } from "./requestMethod"

export const createOrder = async (data: any) => {
  const res = await post(ORDERS_URL, data)
  return res
}

export const getOrderDetail = async (orderID: string) => {
  const res = await get(`${ORDERS_URL}/${orderID}`)
  return res
}