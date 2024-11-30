import { createUser } from "../api/endpoints/users/createUser";
import { configureClient } from "./configureClient";

configureClient();

const [, , name, email] = process.argv;

createUser({ body: { name, email } })
  .ok(200)
  .then((result) => console.log(JSON.stringify(result, null, "  ")));
