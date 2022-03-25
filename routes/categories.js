import { Router } from "express";
import * as categoriesCtrl from "../controllers/categories.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();


/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);

router.get("/", checkAuth, categoriesCtrl.index);
router.post("/", checkAuth, categoriesCtrl.create)

export { router };
