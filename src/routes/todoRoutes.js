const { getTask, getAllTasks, createTask, putTask, patchTask, deleteTask } = require('../controller/todoController');
const Router = require('express').Router;
const router = Router();
const { checkName, checkParams, checkBody, checkBodyReq } = require('../middlewares/todoMiddleware');
const todoAuth = require('../middlewares/todoAuth')
router.get('/', todoAuth.validateToken, getAllTasks);
router.get('/:id', todoAuth.validateToken, checkParams, getTask);
router.put('/:id', todoAuth.validateToken, checkParams, checkBodyReq, putTask);
router.patch('/:id', todoAuth.validateToken, checkParams, checkBody, patchTask);
router.delete('/:id', todoAuth.validateToken, checkParams, deleteTask);
router.post('/', todoAuth.validateToken, checkName, createTask);

module.exports = router;
