
let a = 5 + 2.5;
console.log(a); // Prints 7.5. Both values use the number type, no need to specify floats.

let b = "5" + 6;
console.log(b); // Prints "56" in both JavaScript and TypeScript.

// let y: number = "5" + 6; - Gets a TypeScript error because it exscepts a number. 

let c = "5" - 6;
console.log(c); // Prints -1. JavaScript converts "5" to a number.
// TypeScript also allows this because it follows JavaScript's rules, but it does get underlined as a potential error.

let numbers: number[] = [1, 2, 3];
// numbers.push("hello"); - TypeScript error because this array only accepts numbers, but this is allowed in JavaScript!

let mixed: (number | string)[] = [1, "hello"];
// TypeScript allows becuase it matches declared types.
