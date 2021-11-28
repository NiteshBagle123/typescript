var add = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return "".concat(a, " ").concat(b);
};
console.log(add('Nitesh', 'Bagle'));
console.log(add(1, 2));
