const taskService = require('../services/todo');

const getAllTasks = async (req, res) => {
  try {
    const data = await taskService.getAllTasks();
    res.status(200).json(data);
  }

  catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const found = await taskService.getTask(id);
    res.status(200).json(found);
  }

  catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

const createTask = async (req, res) => {
  try {
    const { name } = req.body;
    const newTask = await taskService.createTask(name);
    res.status(201).json(newTask);
  }

  catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

const putTask = async (req, res) => {
  try {
    const id = req.params.id * 1;
    const body = req.body;
    const taskToUpdate = await taskService.putTask(id, body);
    res.status(200).json(taskToUpdate);
  }

  catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

const patchTask = async (req, res) => {
  try {
    const id = req.params.id * 1;
    const body = req.body;
    const taskToUpdate = await taskService.patchTask(id, body);
    res.status(201).json(taskToUpdate);
  }

  catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id * 1;
    await taskService.deleteTask(id);
    res.status(201).json('deleted');
  }

  catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  putTask,
  patchTask,
  deleteTask,
}
