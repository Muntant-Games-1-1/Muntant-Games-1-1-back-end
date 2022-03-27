import { Router } from "express";
import * as gamesCtrl from "../controllers/games.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/
router.get("/", gamesCtrl.index);
router.get("/:id", gamesCtrl.show);

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);

router.post("/", checkAuth, gamesCtrl.create);
router.delete("/:id", checkAuth, gamesCtrl.delete);

export { router };
