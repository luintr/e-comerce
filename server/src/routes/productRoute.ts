import express from "express";
import { getProducts, getProductbyId } from "../controller/productController";
const router = express.Router()

router.get('/', getProducts)

router.get('/:id', getProductbyId)

export default router