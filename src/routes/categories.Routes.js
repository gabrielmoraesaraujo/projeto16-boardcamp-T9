import { Router } from "express";
import {create, findAll} from "../controllers/categories.Controllers.js";
import {validCategoriesSchema} from "../middlewares/categories.Middleware.js"

const router = Router();

router.post('/categories', validCategoriesSchema, create);
router.get('/categories', findAll);

export default router;