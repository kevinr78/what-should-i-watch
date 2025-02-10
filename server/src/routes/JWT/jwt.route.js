import { Router } from "express";
import { createJWTToken, verifyJWTToken } from "../../middleware/JWT/JWT";

const router = Router();

router.post("/verify", verifyJWTToken);
