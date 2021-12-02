"use strict";
const add = (num1, num2, printResult) => {
    if (printResult) {
        return printResult;
    }
    return num1 + num2;
};
console.log(add(1, 2, true));
