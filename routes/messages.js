import { Router } from "express";
import * as messagesCtrl from "../controllers/messages.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();


/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);

router.get("/", checkAuth, messagesCtrl.index);
router.post("/", checkAuth, messagesCtrl.create);
router.delete("/:id", checkAuth, messagesCtrl.delete)
export { router };
