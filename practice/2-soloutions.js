// // Exercise 1
// let number = 7;
// if (number % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// // Exercise 2
// let num1 = 15, num2 = 20;
// if (num1 > num2) {
//     console.log("Larger number:", num1);
// } else {
//     console.log("Larger number:", num2);
// }


// // Exercise 3
// let character = 'A';
// if (character >= 'A' && character <= 'Z') {
//     console.log("Uppercase letter");
// } else if (character >= 'a' && character <= 'z') {
//     console.log("Lowercase letter");
// } else {
//     console.log("Neither uppercase nor lowercase letter");
// }

// // Exercise 4
// let age = 20;
// if (age >= 18) {
//     console.log("Eligible to vote");
// } else {
//     console.log("Not eligible to vote");
// }

// // Exercise 5
// let num = -3;
// if (num > 0) {
//     console.log("Positive");
// } else {
//     console.log("Non-positive");
// }

// // Exercise 6
// let number = 15;
// if (number % 5 === 0) {
//     console.log(number + " is a multiple of 5");
// } else {
//     console.log(number + " is not a multiple of 5");
// }

// // Exercise 7
// let str = "Hello";
// if (str.length > 5) {
//     console.log("Long string");
// } else {
//     console.log("Short string");
// }

// // Exercise 8
// let number = 6;
// if (number % 2 === 0 && number % 3 === 0) {
//     console.log(number + " is divisible by both 2 and 3");
// } else {
//     console.log(number + " is not divisible by both 2 and 3");
// }





// // Exercise 1
// function isPositive(number) {
//     return number > 0;
// }
// console.log("Is 10 positive?", isPositive(10));

// // Exercise 2
// function calculateSquare(number) {
//     return number * number;
// }
// console.log("Square of 5:", calculateSquare(5));

// // Exercise 3
// function isPrime(number) {
//     if (number <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false;
//     }
//     return true;
// }
// console.log("Is 11 prime?", isPrime(11));

// // Exercise 4
// function isUpperCase(char) {
//     return char === char.toUpperCase();
// }
// console.log("Is 'A' uppercase?", isUpperCase('A'));


// // Exercise 5
// function calculateAverage(num1, num2, num3) {
//     return (num1 + num2 + num3) / 3;
// }
// console.log("Average of 10, 20, 30:", calculateAverage(10, 20, 30));

// // Exercise 6
// function isDivisibleByFive(number) {
//     return number % 5 === 0;
// }
// console.log("Is 25 divisible by 5?", isDivisibleByFive(25));

// // Exercise 7
// function isLongString(str) {
//     return str.length > 5;
// }
// console.log("Is 'Hello World' a long string?", isLongString("Hello World"));


// // Exercise 8
// function isDivisibleByTwoAndThree(number) {
//     return number % 2 === 0 && number % 3 === 0;
// }
// console.log("Is 6 divisible by both 2 and 3?", isDivisibleByTwoAndThree(6));
