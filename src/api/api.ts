import { consoleLogger, createPipeline, logger, notFound, serve } from "kinekt";
import { getUser } from "./endpoints/getUser";

const notFoundEndpoint = { pipeline: createPipeline(notFound(), logger()) };

serve([notFoundEndpoint, getUser], consoleLogger);
