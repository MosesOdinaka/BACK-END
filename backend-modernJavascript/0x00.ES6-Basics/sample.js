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
export default function taskBlock(trueOrFalse) {
    let task = "false";
    let task2 = "true";
    
    if (trueOrFalse) {
        let task = "true";
        let task2 = "false"
    }
    
    return [task, task2];
}

// ----------------------------------------
// 2.Arrow function 
// cat 2.arrow.js
export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];
    const self = this;
    this.addNeighborhood = function add(newNeighborhood) {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
    };
}

// cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';
const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Neo Valley');
console.log(res);

// solution 
export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

    this.addNeighborhood = (newNeighborhood) => {
        this.sanFranciscoNeighborhoods.push(this.newNeighborhood);
        return this.sanFranciscoNeighborhoods
    };
}

//----------------------------------------

// 3.Parameter dsfault
export default function getSumOfHoods(initialNumber, expansion1989,
expansion2019) {
    if (expansion1989 === undifined) {
        expansion1989 = 89;
    }
    if (expansion2019 === undifined) {
        expansion2019 = 19;
    }
    return initialNumber + expansion1989 + expansion2019;
}
// 3-maim.js
import getSumOfHoods from './3-default-parameter.js';
console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));

// Solution 
export default function getSumOfHoods(initialNumber, expansion1989 = 89,
expansion2019 = 19) { return initialNumber + expansion1989 + expansion2019 }

//----------------------------------------
// 4.Rest parameter syntax for function
