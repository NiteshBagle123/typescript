"use strict";
const add = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a} ${b}`;
};
console.log(add('Nitesh', 'Bagle'));
console.log(add(1, 2));
