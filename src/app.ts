function logger(logString: string) {
    console.log('LOGGER FACTORY');
    return (constructor: Function) => {
        console.log('Logging...');
        console.log(logString);
        console.log(constructor);
    }
}

function withTemplate(template:string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return (constructor: any) => {
        console.log('Rendering template...!')
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

@logger('LOGGING - PERSONDATA')
@withTemplate('<h1>My Person</h1>', 'app')

class PersonData {
    name = 'Nitesh';
    constructor() {
        console.log('Creating person class');
    }
}

// const personData = new PersonData();
// console.log(personData);


function log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Access decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @log
    title: string;
    private _price: number;

    @log2
    set price(val: number) {
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - please provide price greater than zero');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @log3
    getPriceWithTax(@log4 tax: number){
        return this._price * (1 + tax);
    }
}