import { createUser } from "../api/endpoints/users/createUser";
import { configureBaseUrl } from "./configureBaseUrl";

configureBaseUrl();

const [, , name, email] = process.argv;

createUser({ body: { name, email } }).then((result) =>
  console.log(JSON.stringify(result, null, "  "))
);
