// interface User {
//   name: string;
//   age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }
// const sum = sumOfAge({ name: "Nirbhay", age: 20 }, { name: "John", age: 30 });
// console.log(sum);

//pick
interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;

function updateUser(updatedProps: UpdateProps) {
  console.log(updatedProps.email, updatedProps.age, updatedProps.name);
}

// Example usage
const userUpdate: UpdateProps = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

updateUser(userUpdate);
