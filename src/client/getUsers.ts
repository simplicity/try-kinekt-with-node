import { getUsers } from "../api/endpoints/users/getUsers";
import { configureClient } from "./configureClient";

configureClient();

getUsers({})
  .ok(200)
  .then((result) => console.log(JSON.stringify(result, null, "  ")));
