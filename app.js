var add = function (a, b) {
    return a + b;
};
var combineResult;
combineResult = add;
console.log(combineResult(1, 3));
var addAndHandle = function (a, b, cb) { return cb(a + b); };
addAndHandle(1, 10, function (res) {
    console.log('Print result', res);
});
