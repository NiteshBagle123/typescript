type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString(); 
    }

    return a + b;
}

type Admin = {
    name: string,
    privilege: string [] 
}

type Employee = {
    name: string,
    startDate: Date
}

type unknownEmployee = Employee | Admin ;

function printEmployeeInformation(emp : unknownEmployee) {
    console.log(emp.name);
    if('privilege' in emp) {
        console.log(emp.privilege);
    }

    if('startDate' in emp) {
        console.log(emp.startDate);
    }
}

printEmployeeInformation({
    name: 'Nitesh',
    startDate: new Date(),
    privilege: ['create-server']
});

class Car {
    drive() {
        console.log('Drive Car!')
    }
}

class Truck {
    drive() {
        console.log('Drive Truck');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...!', amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird',
    flyingSpeed: number 
}

interface Horse {
    type: 'horse',
    runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    if(animal.type === 'bird') {
        return animal.flyingSpeed;
    }

    if(animal.type === 'horse') {
        return animal.runningSpeed;
    }
}

moveAnimal({ type: 'bird', flyingSpeed: 1000 });
moveAnimal( { type: 'horse', runningSpeed: 100 });

// const userInput = <HTMLInputElement> document.getElementById('user-input')!;
const userInput = document.getElementById('user-input')! as HTMLInputElement;

userInput.value = 'Hi there!';

// index properties

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'dummy@xyz.com',
    username: 'Test'
}

// optional chaining
const optionalChainingObj = {
    id: 1,
    name: 'Nitesh',
    job: {
        title: 'Senior Engineer',
        description: 'Full stack developer'
    }
}

console.log(optionalChainingObj ?.job ?.title);

// nullish coalescing

const nullishObj = {
    title: 'Senior Engineer',
    detail: {
        job: 'Full stack developer',
        description: 'Testing!!!'
    }
};

console.log(nullishObj ?? 'DEFAULT');




