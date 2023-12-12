import asyncHandler from "../middleware/asyncHandler";
import Product from "../model/productModel";

// @desc      Fetch all Products
// @route     GET /api/products
// @access    Public
export const getProducts = asyncHandler(async (req: any, res: any) => {
  const products = await Product.find({})
  if (products) {
    res.send({ data: products })
  } else {
    throw new Error('Something went wrong')
  }
})

// @desc      Fetch a Product
// @route     GET /api/products/:id
// @access    Public
export const getProductbyId = asyncHandler(async (req: any, res: any) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    return res.send({ data: product })
  } else {
    res.status(404);
    throw new Error('Product not found')
  }
})