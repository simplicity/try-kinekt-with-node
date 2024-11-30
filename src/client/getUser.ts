import { getUser } from "../api/endpoints/users/getUser";
import { configureClient } from "./configureClient";

configureClient();

const [, , id] = process.argv;

getUser({ params: { id: parseInt(id) } })
  .ok(200)
  .then((result) => console.log(JSON.stringify(result, null, "  ")));
