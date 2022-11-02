"use strict";
let myName = "Nidhi";
let stringArr = ['one', 'hey', 'Nidhi'];
let guitars = ['Strat', 'Les Paul', 3232];
let mixedData = ['EVH', 1984, true];
stringArr[0] = "Sharma";
stringArr.push('Kumari');
guitars[0] = 1983;
guitars.unshift('Dipu');
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
bands.push('Aman');
// Tuple
let myTuple = ['Nidhi', 42, true];
let mixed = ['Sharma', 1, false];
mixed = myTuple;
myTuple[2] = false;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Nidhi",
    prop2: true,
};
exampleObj.prop1 = "Sharma";
let evh = {
    name: "Dipu",
    active: false,
    albums: [1938, 283, 'Oehe']
};
let jp = {
    active: true,
    albums: [1933, 28, 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
//Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
