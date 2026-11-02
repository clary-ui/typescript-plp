// If / Else and multiple conditions

let x: number = 5;
let y: number = 8;

if (x > 0 && y < 10) {
    console.log("True");
} else {
    console.log("False");
}
// && means both conditions must be true.


// If / Else If / Else

let grade: number = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else {
    console.log("Below B");
}
// Checks conditions in order and executes the first match.


// Logical operators and short-circuiting

let a: boolean = true;
let b: boolean = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a);     // false

// With &&, a false first condition skips the second.
// With ||, a true first condition skips the second.


// Switch / Case

let day: number = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}
// break exits the switch. default runs if no cases match.
