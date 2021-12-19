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

function counterAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = 'Got no value.';
    if(element.length) {
        description = `Got ${element.length} elements`;
    }
    return [element, description];
}

console.log(counterAndDescribe('Hi, there!'));

function extractAndConcat<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

console.log(extractAndConcat({ 1: 'a', 2: 'b' }, 2));

