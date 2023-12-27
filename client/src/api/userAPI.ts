import { USERS_URL } from "@/constants/route"
import { post, put } from "./requestMethod"

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
export const profile = async (data: any) => {
  const res = await put(`${USERS_URL}/profile`, data)
  return res
}