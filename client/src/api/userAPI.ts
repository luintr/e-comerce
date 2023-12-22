import { USERS_URL } from "@/constants/route"
import { post } from "./requestMethod"

export const login = async (data: any) => {
  const res = await post(`${USERS_URL}/auth`, data)
  return res
}
export const register = async (data: any) => {
  const res = await post(`${USERS_URL}/register`, data)
  return res
}
export const logout = async (data: any) => {
  const res = await post(`${USERS_URL}/logout`, data)
  return res
}