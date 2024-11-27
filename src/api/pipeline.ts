import {
  authenticate,
  checkAcceptHeader,
  cors,
  createPipeline,
  createValidatedEndpointFactory,
  deserialize,
  finalize,
  handleValidationErrors,
  logger,
  serialize,
  ValidationErrors,
  withValidation,
} from "kinekt";

const defaultValidationErrorHandler = (validationErrors: ValidationErrors) => ({
  statusCode: 400 as const,
  body: validationErrors,
});

export const pipeline = createValidatedEndpointFactory(
  createPipeline(
    cors({ origins: "*" }),
    checkAcceptHeader(),
    deserialize(),
    authenticate(),
    withValidation()
  ).split(
    handleValidationErrors(defaultValidationErrorHandler),
    serialize(),
    finalize(),
    logger()
  )
);
