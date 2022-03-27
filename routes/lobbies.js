import { Router } from "express";
import * as lobbiesCtrl from "../controllers/lobbies.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/
router.get("/", lobbiesCtrl.index);
router.get("/:id", lobbiesCtrl.show);

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);
router.post("/", checkAuth, lobbiesCtrl.create);
router.delete("/:id", checkAuth, lobbiesCtrl.delete);
router.put("/:id", checkAuth, lobbiesCtrl.update);
router.patch("/:id/join", checkAuth, lobbiesCtrl.join);

export { router };
