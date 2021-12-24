function logger(logString: string) {
    return (constructor: Function) => {
        console.log('Logging...');
        console.log(logString);
        console.log(constructor);
    }
}

function withTemplate(template:string, hookId: string) {
    return (constructor: any) => {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

@withTemplate('<h1>My Person</h1>', 'app')
class PersonData {
    name = 'Nitesh';
    constructor() {
        console.log('Creating person class');
    }
}

// const personData = new PersonData();

// console.log(personData);