function greet(name: String) {
  console.log(`Hello ${name}`);
}
// greet("Nirbhay");

//type infrence
// interfaces can implemented by classes
// types let you do union and intersecion
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
//using union
type GreetArg = number | string;
function greet2(id: GreetArg) {
  console.log(id);
}
// greet2(5);
// greet2("4");

//type in typescript
// In TypeScript, type is a keyword used to define custom types. These custom types can represent a variety of shapes and structures, including object types, union types, intersection types, and more. Using type, you can create aliases for any valid TypeScript type, making your code more readable and easier to maintain.

type User = {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
};

// const user: User = {
//   id: 1,
//   name: "John Doe",
//   email: "john.doe@example.com",
// };

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "cherry"];

//multidimensional array
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

type NumberArr = number[];

function maxValue(arr: NumberArr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const printMaxValue = maxValue([1, 2, 3, 4]);
// console.log(printMaxValue);

const user: number[] = [20, 22, 21, 15, 13, 19, 11];

const legalUser = user.filter((num) => num > 18);
// console.log(legalUser);

//intersection

interface BuisnessPartner {
  name: string;
  creditScore: number;
}
interface UserIdentity {
  id: number;
  email: string;
}

type Employee = BuisnessPartner & UserIdentity;
const signContract = (employee: Employee): void => {
  console.log(
    "Contract Signed by " + employee.name + " with email" + employee.email
  );
};

// signContract({
//   name: "Nirbhay",
//   creditScore: 10000,
//   id: 20,
//   email: "nirbhaysingh943012@gmail.com",
// });

// Enum

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// let direction: Direction = Direction.Left;
// console.log(direction);

// enum Direction {
//   Up = 1,
//   Down = 3,
//   Left = 5,
//   Right = 7,
// }

// let direction: Direction = Direction.Left;
// console.log(direction); // Output: 5

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let direction: Direction = Direction.Right;
// console.log(direction);

enum UserRole {
  Admin,
  User,
  Guest,
}
function checkUserRole(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("User is an Admin.");
  } else if (role === UserRole.User) {
    console.log("User is a regular user.");
  } else {
    console.log("User is a guest.");
  }
}

// checkUserRole(UserRole.User);

//geeric
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}
function getFirstElement2<T>(arr: T[]) {
  return arr[0];
}
const el = getFirstElement(["Nirbhay Singh", "Kunal arya"]);
console.log(el.toLowerCase());
const el2 = getFirstElement2([10, 20, 30]);
console.log(el2);
