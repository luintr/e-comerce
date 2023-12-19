import { Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import Order from "../model/orderModel";

// @desc      Create new order
// @route     POST /api/orders
// @access    Private
export const addOrderItems = asyncHandler(async (req: Request, res: Response) => {
  res.send('add my orders')
})

// @desc      Get logged in user orders
// @route     GET /api/orders/myorders
// @access    Private
export const getMyOrders = asyncHandler(async (req: Request, res: Response) => {
  res.send('get my orders')
})

// @desc      Get order by id
// @route     GET /api/orders/:id
// @access    Private
export const getOrderById = asyncHandler(async (req: Request, res: Response) => {
  res.send('get order by id')
})

// @desc      Update order to paid
// @route     GET /api/orders/:id/pay
// @access    Private
export const updateOrderToPaid = asyncHandler(async (req: Request, res: Response) => {
  res.send('update order to paid')
})

// @desc      Update order to delivered
// @route     GET /api/orders/:id/deliver
// @access    Private/Admin
export const updateOrderToDelivered = asyncHandler(async (req: Request, res: Response) => {
  res.send('update order to delivered')
})

// @desc      Get all orders
// @route     GET /api/orders/
// @access    Private/Admin
export const getOrders = asyncHandler(async (req: Request, res: Response) => {
  res.send('get orders')
})