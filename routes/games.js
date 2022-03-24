import { Router } from "express";
import * as gamesCtrl from "../controllers/games.js";
import { checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/

router.get("/", checkAuth, gamesCtrl.index);

export { router };
