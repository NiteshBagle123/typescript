"use strict";
// unknow type
let userInput;
let userName;
userInput = 10;
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type
const error = (message, code) => {
    throw { message, code };
};
error('not found', 404);
