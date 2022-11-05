// Type Assertions OR Castings

type One = string;
type Two = string | number;
type Three = "hello";

// Convert to more or less specific

let a: One = "hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific type

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be Careful
let nextVal: number = addOrConcat(2, 2, "concat") as number;

10 as unknown as string;

// the DOM

const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");
img.src;
myImg.src;
