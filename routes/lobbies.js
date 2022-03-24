import { Router } from "express";
import * as lobbiesCtrl from "../controllers/lobbies.js";
import { checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/

router.get("/", lobbiesCtrl.index);
router.post("/", lobbiesCtrl.create);
router.delete("/", lobbiesCtrl.delete)

export { router };
