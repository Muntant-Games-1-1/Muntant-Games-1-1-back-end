import { Router } from "express";
import * as gamesCtrl from "../controllers/games.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);

router.get("/", checkAuth, gamesCtrl.index);
router.get("/:id", checkAuth, gamesCtrl.show);

router.post("/", checkAuth, gamesCtrl.create);

router.delete("/:id", checkAuth, gamesCtrl.delete);

export { router };
