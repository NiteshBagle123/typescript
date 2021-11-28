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

enum Role {
    ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'
};

const person = {
    name: 'Nitesh',
    age: 26,
    hobbies: ['trecking', 'cricket', 'music'],
    role: Role.ADMIN,

};

console.log(person);
console.log(person.hobbies.map(hobby => hobby));