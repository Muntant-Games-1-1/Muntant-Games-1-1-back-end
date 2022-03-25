import { Router } from "express";
import * as messagesCtrl from "../controllers/messages.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

router.use(decodeUserFromToken)

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/

router.get("/", checkAuth, messagesCtrl.index);
router.post("/",checkAuth, messagesCtrl.create)

export { router };
