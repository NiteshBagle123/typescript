const names: Array<string> = ['1', '2'];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is working!');
    }, 0);
});

promise.then(res => {
    console.log(res);
});

// Generic functions

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Nitesh'}, { age: 26 });
console.log(mergeObj);



