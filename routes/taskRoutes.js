import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  newTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskControllers.js";

const router = Router();

router.post("", isAuthenticated, newTask);
router.get("", isAuthenticated, getAllTasks);
router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;
