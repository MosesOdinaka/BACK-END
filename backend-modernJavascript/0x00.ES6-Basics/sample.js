// 0. Const or Let
export function taskFirst() {
    var task = 'I prefer const when I can.';
    return task;
}

export function geLast() {
    return ' is okay';
}

export function getNext() {
    var combination = 'But sometimes let';
    combination += getLast();

    return combination;
}
//0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);
// (solution)0-constant.js
export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}
export function getLast() {
    return ' is okay';
}
export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}

//---------------------------------------------------------

// 1. Block Scope.
export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;


    if (trueOrFalse) {
        var task = true;
        var task = false;
    }

    return [task, task2];
}

// 1.main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));

// (solution)1-block-scoped.js
