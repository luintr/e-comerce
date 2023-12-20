import { ORDERS_URL } from "@/constants/route"
import { post } from "./requestMethod"

export const createOrder = async (data: any) => {
  const response = await post(ORDERS_URL, data)
  console.log(response)
}