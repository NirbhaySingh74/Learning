import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}

insertUser("Kunal@gmail.com", "Kunal#12", "Kunal", "Arya");

// Function to get all users
async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    return users;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
getAllUsers();
