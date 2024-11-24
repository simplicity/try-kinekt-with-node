import {
  consoleLogger,
  createPipeline,
  createServer,
  logger,
  notFound,
} from "kinekt";
import { createUser } from "./endpoints/users/createUser";
import { getUser } from "./endpoints/users/getUser";
import { getUsers } from "./endpoints/users/getUsers";

const notFoundEndpoint = { pipeline: createPipeline(notFound(), logger()) };

const serve = createServer({
  logger: consoleLogger,
  port: parseInt(process.env.PORT ?? "3000"),
  hostname: "0.0.0.0",
});
serve(notFoundEndpoint, getUser, getUsers, createUser);
