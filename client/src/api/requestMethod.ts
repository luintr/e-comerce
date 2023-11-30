import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_LOCAL_URL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

export type TDefaultResponse<T> = {
  status: number;
  message?: string;
  data: T;
};

export const get = async <T>(url: string, option?: any) => {
  const response = await request.get(url, option);
  return response.data as TDefaultResponse<T>;
};

export const post = async <T, K = any>(url: string, data: K, option?: any) => {
  const response = await request.post(url, data, option);
  return response.data as TDefaultResponse<T>;
};

export const put = async <T, K = any>(url: string, data: K, option?: any) => {
  const response = await request.put(url, data, option);
  return response.data as TDefaultResponse<T>;
};