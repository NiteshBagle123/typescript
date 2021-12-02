"use strict";
// return type
const add = (a, b) => {
    return a + b;
};
// function type
let combineResult;
combineResult = add;
console.log(combineResult(1, 3));
// callback funtion using typescript
const addAndHandle = (a, b, cb) => cb(a + b);
addAndHandle(1, 10, (res) => {
    console.log('Print result', res);
});
