import {
  consoleLogger,
  createPipeline,
  createServer,
  logger,
  notFound,
} from "kinekt";
import { getUser } from "./endpoints/getUser";

const notFoundEndpoint = { pipeline: createPipeline(notFound(), logger()) };

const serve = createServer({ logger: consoleLogger });
serve(notFoundEndpoint, getUser);
