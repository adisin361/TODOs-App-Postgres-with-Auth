const { Todo } = require('../../database/models');
const todoService = require('../../src/services/todo');

describe('Todo Service', () => {
	it('Should return all tasks', async () => {
		jest.spyOn(Todo, 'findAll').mockResolvedValue([
			{
				id: 1,
				name: 'Task 1',
				isComplete: false,
				createdAt: 'data-time',
				updatedAt: 'date-time'
			}
		]);
		const task = await todoService.getAllTasks();
		expect(task).toEqual([
			{
				id: 1,
				name: 'Task 1',
				isComplete: false,
				createdAt: 'data-time',
				updatedAt: 'date-time'
			},
		]);
	});
});

