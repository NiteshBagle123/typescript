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

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string | number>();

textStorage.addItem('Nitesh');
textStorage.addItem('King');
textStorage.addItem('Shraddha');

textStorage.removeItem('King')

console.log(textStorage.getItems());

// generic types

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = { };
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;

    return courseGoal as CourseGoal;
}

const namesArr: Readonly<string []> = ['Nitesh', 'Shraddha'];




