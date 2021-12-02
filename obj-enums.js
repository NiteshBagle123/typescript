"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string [];
//     role: [number, string];
// } = {
//     name: 'Nitesh',
//     age: 26,
//     hobbies: ['trecking', 'cricket', 'music'],
//     role: [2, 'author']
// };
// person.role = [];
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Nitesh',
    age: 26,
    hobbies: ['trecking', 'cricket', 'music'],
    role: Role.ADMIN,
};
console.log(person);
console.log(person.hobbies.map(hobby => hobby));
