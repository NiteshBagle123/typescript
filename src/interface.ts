interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Nitesh',
    age: 26,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
};

user1.greet('Hello!');

interface Greetable {
    readonly name: string;
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

const personObj = new Person('Nitesh');

personObj.greet('Hello!');

interface AddFn {
    (a: number, b: number): number;
    outputName?: string
}

let addFunc: AddFn;

addFunc = (n1: number, n2: number) => {
    return n1 + n2;
};