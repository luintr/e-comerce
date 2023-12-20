import { Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import Order from "../model/orderModel";

// @desc      Create new order
// @route     POST /api/orders
// @access    Private
export const addOrderItems = asyncHandler(async (req: Request, res: Response) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
  } else {
    const order = new Order({
      orderItems: orderItems.map((item: any) => ({
        ...item,
        product: item._id,
        _id: undefined
      })),
      // @ts-ignore:next-line
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    })
  }
})

// @desc      Get logged in user orders
// @route     GET /api/orders/myorders
// @access    Private
export const getMyOrders = asyncHandler(async (req: Request, res: Response) => {
  // @ts-ignore:next-line
  const orders = await Order.find({ user: req.user._id })
  res.status(200).send(orders)
})

// @desc      Get order by id
// @route     GET /api/orders/:id
// @access    Private
export const getOrderById = asyncHandler(async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email')

  if (order) {
    res.status(200).send(order)
  } else {
    res.status(404);
    throw new Error('Order Not Found')
  }
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