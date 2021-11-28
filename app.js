// unknow type
var userInput;
var userName;
userInput = 10;
userInput = '10';
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type
var error = function (message, code) {
    throw { message: message, code: code };
};
error('not found', 404);
