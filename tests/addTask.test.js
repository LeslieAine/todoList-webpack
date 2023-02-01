import { addTask } from '../src/addRemove.js';

describe ('adding task', () => {
    let todoTask = [];

    test('add one task',() => {
        const task = {description: 'task', completed:false, index:1};

        addTask(todoTask, task);

        expect(todoTask).toBe([task]);
    });
})