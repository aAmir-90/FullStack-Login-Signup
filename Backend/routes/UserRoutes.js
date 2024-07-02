import express from "express";
import {
  deleteUser,
  getUser,
  loginController,
  registerController,
  updateData,
} from "../controllers/UserController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/get-user", getUser);
router.put("/update-user/:id", authMiddleware, updateData);
router.delete("/delete-user/:id", authMiddleware, deleteUser);

export default router;
