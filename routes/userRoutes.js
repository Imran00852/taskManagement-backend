import { Router } from "express";
import {
  login,
  registerUser,
  getMyDetails,
  logout,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/my", isAuthenticated, getMyDetails);
router.get("/logout", logout);

export default router;
