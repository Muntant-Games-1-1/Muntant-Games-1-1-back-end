import { Router } from "express";
import * as categoriesCtrl from "../controllers/categories.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/
router.get("/", categoriesCtrl.index);
router.get("/:id", categoriesCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);

router.post("/", checkAuth, categoriesCtrl.create);

export { router };
