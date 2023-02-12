const { Todo } = require('../../database/models');

const getAllTasks = async () => {
  return await Todo.findAll();
}

const getTask = async (id) => {
  return Todo.findOne({
    where: {
      id: id
    }
  });
}

const createTask = async (name) => {
  return Todo.create({
    name: name,
    isComplete: false
  });
}

const putTask = async (id, body) => {
  return Todo.update(body, {
    where: {
      id: id
    }
  });
}

const patchTask = async (id, body) => {
  return Todo.update(body, {
    where: {
      id: id
    }
  });
}

const deleteTask = async (id) => {
  return Todo.destroy({
    where: {
      id: id
    }
  });
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  putTask,
  patchTask,
  deleteTask,
}