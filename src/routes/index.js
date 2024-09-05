import { Router } from "express";
import { categoryRoutes } from "../modules/category/category.routes.js";
import { productRoutes } from "../modules/product/product.routes.js";
import imageRoutes from "../modules/image/image.routes.js";
import orderRoutes from "../modules/order-likes/order-likes.routes.js";


export const router = Router()

router
    .use('/categories',categoryRoutes)
    .use('/products',productRoutes)
    .use("/images",imageRoutes)
    .use("/orders-wishlist",orderRoutes)