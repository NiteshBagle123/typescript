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