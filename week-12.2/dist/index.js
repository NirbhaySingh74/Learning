"use strict";
// interface User {
//   name: string;
//   age: number;
// }
function updateUser(updatedProps) {
    console.log(updatedProps.email, updatedProps.age, updatedProps.name);
}
// Example usage
const userUpdate = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
};
updateUser(userUpdate);
