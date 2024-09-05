import { Router } from "express";
import { addProduct, deleteProduct, getAllProducts, updateProductById } from "./product.controller.js";

export const productRoutes = Router()

productRoutes
    .get('/',getAllProducts)
    .post('/',addProduct)
    .put('/:productId',updateProductById)
    .delete('/:productId',deleteProduct)