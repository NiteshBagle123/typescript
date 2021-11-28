// return type
const add = (a: number, b: number): number => {
    return a + b;
}

// function type
let combineResult: (a: number, b: number) => number;

combineResult = add;

console.log(combineResult(1, 3)); 

// callback funtion using typescript
const addAndHandle = (a: number, b: number, cb: (num: number) => void) => cb(a + b);

addAndHandle(1, 10, (res) => {
    console.log('Print result', res);
});

