import { Router } from "express";
import { order, wishlist } from "./order.contoller-likes.js";



const orderRoutes = Router();
orderRoutes
    .get("/orders",order)
    .get("/wishlist",wishlist)

export default orderRoutes