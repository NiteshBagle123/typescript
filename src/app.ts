function logger(logString: string) {
    return (constructor: Function) => {
        console.log('Logging...');
        console.log(logString);
        console.log(constructor);
    }
}


@logger('LOGGING - PERSONDATA')
class PersonData {
    name = 'Nitesh';
    constructor() {
        console.log('Creating person class');
    }
}

// const personData = new PersonData();

// console.log(personData);