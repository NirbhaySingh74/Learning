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
// interface User {
//   id: string;
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }

// type UpdateProps = Pick<User, "name" | "age" | "email">;

// function updateUser(updatedProps: UpdateProps) {
//   console.log(updatedProps.email, updatedProps.age, updatedProps.name);
// }

// Example usage
// const userUpdate: UpdateProps = {
//   name: "John Doe",
//   age: 30,
//   email: "john.doe@example.com",
// };

// updateUser(userUpdate);

//partial
// type UpdateProps = Pick<User, "name" | "age" | "email">;
// type UpdatePropsOptional = Partial<UpdateProps>;
// function updateUser(updatedProps: UpdatePropsOptional) {
//   console.log(updatedProps?.email, updatedProps?.age, updatedProps.name);
// }
// updateUser({ name: "Nirbhay" });

import { z } from "zod";
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return;
  }
  // update database here
  res.json({
    message: "User updated",
  });
});

app.listen(3000);
