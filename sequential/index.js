const {taskOne, taskTwo} = require('./tasks');

async function main() {
    console.time('Measuring time');
    const valueOne = await taskOne();
    const valueTwo = await taskTwo();
    console.timeEnd('Measuring time');

    console.log('Task One', valueOne);
    console.log('Task Two', valueTwo);
}

main();