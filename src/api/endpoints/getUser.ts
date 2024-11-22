import { z } from "zod";
import { pipeline } from "../pipeline";

export type User = {
  id: string;
  name: string;
  email: string;
};

export const getUser = pipeline.createEndpoint(
  "GET /users/:id?includePosts",

  {
    params: z.object({ id: z.string() }),
    query: z.object({ includePosts: z.coerce.boolean() }),

    response: {
      200: z.custom<User>(),
    },
  },

  async ({ params }) => {
    return {
      statusCode: 200,
      body: { id: params.id, name: "some name", email: "some@email.com" },
    };
  }
);
