"use strict";
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Nirbhay");
//type infrence
function sum(firstNum, secondNum) {
    return firstNum + secondNum;
}
console.log(sum(10, 20));
function isLegal(age) {
    return age >= 18;
}
console.log(isLegal(25));
