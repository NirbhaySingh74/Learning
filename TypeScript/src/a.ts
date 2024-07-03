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

// Interface -
// Interfaces in TypeScript are used to define the structure of objects.
// They ensure objects conform to a specific structure, making the code predictable.
// Interfaces can have optional properties, can be extended, and can describe function types
// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
//   email?: string;
// }
// function isLegal(user: User) {
//   return user.age >= 18;
// }

// console.log(
//   isLegal({
//     firstName: "Nirbhay",
//     lastName: "Singh",
//     age: 21,
//   })
// );

//First way
// function greet2(id: number | string) {
//   console.log(id);
// }

//second way
type GreetArg = number | string;
function greet2(id: GreetArg) {
  console.log(id);
}
greet2(5);
greet2("4");

//type in typescript
// In TypeScript, type is a keyword used to define custom types. These custom types can represent a variety of shapes and structures, including object types, union types, intersection types, and more. Using type, you can create aliases for any valid TypeScript type, making your code more readable and easier to maintain.

type User = {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
};

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};
