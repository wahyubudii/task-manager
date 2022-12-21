const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("all items from the file");
};

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error)
    // req.status(500).json({ msg:error });
  }
};
 
const getTask = (req, res) => {
  res.send("Get Single Task");
};

const updateTasks = (req, res) => {
  res.send("Update Task");
};

const deleteTasks = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTasks,
  deleteTasks,
};
