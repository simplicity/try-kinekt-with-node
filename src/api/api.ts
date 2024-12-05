import { createNotFoundEndpoint, createServer } from "kinekt";
import { createUser } from "./endpoints/users/createUser";
import { getUser } from "./endpoints/users/getUser";
import { getUsers } from "./endpoints/users/getUsers";

const serve = createServer({
  port: parseInt(process.env.PORT ?? "3000"),
  hostname: "0.0.0.0",
});

serve(createNotFoundEndpoint(), getUser, getUsers, createUser);
