import { Router } from "express";
import * as messagesCtrl from "../controllers/messages.js";
import { checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/

router.get("/", checkAuth, messagesCtrl.index);

export { router };
