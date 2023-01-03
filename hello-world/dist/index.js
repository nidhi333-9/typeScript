"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level;
level = 1;
level = "a";
function render(document) {
    console.log(document);
}
let numbers = [1, 3, 4];
numbers.forEach((n) => n.toFixed);
let user = [1, "Nidhi"];
let mySize = 3;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 50000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "Nidhi";
//# sourceMappingURL=index.js.map