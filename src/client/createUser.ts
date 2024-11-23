import { createUser } from "../api/endpoints/users/createUser";

createUser({ body: { name: "some user", email: "some email" } }).then(
  console.log
);
