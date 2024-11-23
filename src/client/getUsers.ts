import { getUsers } from "../api/endpoints/users/getUsers";
import { configureBaseUrl } from "./configureBaseUrl";

configureBaseUrl();

getUsers({}).then((result) => console.log(JSON.stringify(result, null, "  ")));
