function greet(name: String) {
  console.log(`Hello ${name}`);
}
// greet("Nirbhay");

//type infrence
function sum(firstNum: number, secondNum: number): number {
  return firstNum + secondNum;
}

// console.log(sum(10, 20));

// function isLegal(age: number): boolean {
//   return age >= 18;
// }

// console.log(isLegal(25));

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}
function isLegal(user: User) {
  return user.age >= 18;
}

console.log(
  isLegal({
    firstName: "Nirbhay",
    lastName: "Singh",
    age: 21,
  })
);
