import { Router } from "express";
import { addCategory, deleteCategory, getAllCategories, getCategoryById, updateCategoryById } from "./category.controller.js";


export const categoryRoutes = Router()

categoryRoutes
    .post('/',addCategory)
    .get('/',getAllCategories)
    .get("/:id",getCategoryById)
    .put('/:categoryId',updateCategoryById)
    .delete('/:categoryId',deleteCategory)