// Question 43 ;
// Answer 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createcar(manufacture, model, optional) {
    return __assign({}, optional);
}
var mycar, createCar;
("toyota", "revo", { color: "silver", year: "2024" });
console.log(mycar);
