// unknow type
let userInput: unknown;
let userName: string;

userInput = 10;
userInput = '10';

if(typeof userInput === 'string'){
    userName = userInput;
}

// never type

const error = (message: string, code: number) => {
    throw { message, code };
};

error('not found', 404);