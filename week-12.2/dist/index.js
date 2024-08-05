"use strict";
// interface User {
//   name: string;
//   age: number;
// }
function updateUser(updatedProps) {
    console.log(updatedProps === null || updatedProps === void 0 ? void 0 : updatedProps.email, updatedProps === null || updatedProps === void 0 ? void 0 : updatedProps.age, updatedProps.name);
}
updateUser({ name: "Nirbhay" });
