const todoController = require('../../src/controller/todoController');
const taskService = require('../../src/services/todo');
describe('TODOs Controller Tests', () => {
  it('Should return all tasks as an array of objects', async () => {
    jest.spyOn(taskService, 'getAllTasks').mockResolvedValue([
      {
        id: 1
      }
    ])

    const mockReq = {}
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await todoController.getAllTasks(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(
      [
        {
          id: 1
        }
      ]
    )
  })

  it('Should return a task with a specific id', async () => {
    jest.spyOn(taskService, 'getTask').mockResolvedValue([
      {
        id: 1
      }
    ])

    const mockReq = {
      params: jest.fn()
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await todoController.getTask(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith({
      data: [{ id: 1 }]
    })
  })

  it('Should create a task', async () => {
    jest.spyOn(taskService, 'createTask').mockResolvedValue([
      {
        name: "Study JS"
      }
    ])

    const mockReq = {
      body: jest.fn()
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await todoController.createTask(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith({
      data: [{ name: "Study JS" }]
    })
  })

  it('Should return integer when called patch', async () => {
    jest.spyOn(taskService, 'patchTask').mockResolvedValue([1]);

    const mockReq = {
      params: jest.fn(),
      body: jest.fn()
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await todoController.patchTask(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith({
      data: [1]
    });
  });
})

