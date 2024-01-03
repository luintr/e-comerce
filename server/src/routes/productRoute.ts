import express from "express";
import { getProducts, getProductbyId, createProduct } from "../controller/productController";
import { admin, protect } from "../middleware/authMiddleware";
const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id').get(getProductbyId)

export default router