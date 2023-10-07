const {taskOne, taskTwo} = require('./tasks');

const valueOne = taskOne();

console.log('Task One returned', valueOne);

const valueTwo = taskTwo();

console.log('Task Two returned', valueTwo);