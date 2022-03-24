import { Router } from "express";
import * as categoriesCtrl from "../controllers/categories.js";
import { checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/

router.get("/", categoriesCtrl.index);
router.post("/", categoriesCtrl.create)

export { router };
