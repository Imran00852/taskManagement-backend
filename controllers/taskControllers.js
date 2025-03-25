import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

//create new task
export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description)
      return next(
        new ErrorHandler("Title or Description cannot be empty", 400)
      );

    await Task.create({
      title,
      description,
      user: req.user,
    });
    res.status(201).json({
      success: true,
      message: "Task Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

//get all tasks
export const getAllTasks = async (req, res, next) => {
  try {
    const userid = req.user;
    const tasks = await Task.find({ user: userid });
    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

//update task
export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { isCompleted } = req.body;
    const task = await Task.findById(id);

    if (!task) return next(new ErrorHandler("Invalid ID", 400));

    if (typeof isCompleted === "boolean") task.isCompleted = isCompleted;

    await task.save();

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    next(error);
  }
};

//delete task
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return next(new ErrorHandler("Invalid ID", 400));
    await task.deleteOne();
    res.status(200).json({
      success: true,
      message: "Task Deleted",
    });
  } catch (error) {
    next(error);
  }
};
