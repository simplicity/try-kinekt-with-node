import { getUser } from "../api/endpoints/users/getUser";
import { configureBaseUrl } from "./configureBaseUrl";

configureBaseUrl();

const [, , id] = process.argv;

getUser({ params: { id: parseInt(id) } }).then((result) =>
  console.log(JSON.stringify(result, null, "  "))
);
