import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string,
//   email: string
// ) {
//   const res = await prisma.user.create({
//     data: {
//       username,
//       password,
//       firstName,
//       lastName,
//       email,
//     },
//   });
//   console.log(res);
// }

// insertUser("admin2", "123456", "Harkirat", "singh", "harkirat@gmail.com");

// async function addTodo() {
//   await prisma.todo.create({
//     data: {
//       title: "Learn Prisma",
//       description: "Learn prsisma with Typescript",
//       userId: 1,
//     },
//   });
// }

async function getTodos(userId: number) {
  const response = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      user: true,
    },
  });
  console.log(response);
}
getTodos(1);
// addTodo();
