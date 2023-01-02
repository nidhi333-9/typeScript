let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;

let level;
level = 1;
level = "a";

function render(document: number) {
  console.log(document);
}

let numbers: number[] = [1, 3, 4];
numbers.forEach((n) => n.toFixed);

// Tuples

let user: [number, string] = [1, "Nidhi"];

// Enumes

const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Large;
console.log(mySize);
// functions

function calculateTax(income: number, taxYear = 2022) {
  if (taxYear < 50_000) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);
