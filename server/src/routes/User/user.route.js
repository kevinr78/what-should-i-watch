/* import {
  userLogin,
  userSignup,
} from "../../controller/User/user.controller.js"; */
import { verifyJWTToken } from "../../middleware/JWT/JWT.js";
import { userLogin, userSignup } from "#controller/user/user.controller.js";
import { Router } from "express";

const router = Router();

router.post("/login", userLogin);
router.post("/signup", userSignup);

export { router as userRouter };
