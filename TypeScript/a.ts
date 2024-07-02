function greet(name: String) {
  console.log(`Hello ${name}`);
}
greet("Nirbhay");

//type infrence
function sum(firstNum: number, secondNum: number): number {
  return firstNum + secondNum;
}

console.log(sum(10, 20));

function isLegal(age: number): boolean {
  return age >= 18;
}

console.log(isLegal(25));
