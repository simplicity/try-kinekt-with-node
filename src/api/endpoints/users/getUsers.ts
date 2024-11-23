import { z } from "zod";
import { db } from "../../../db/db";
import { users } from "../../../db/schema";
import { pipeline } from "../../pipeline";

type User = typeof users.$inferSelect;

async function selectUsers() {
  return db.select().from(users);
}

export const getUsers = pipeline.createEndpoint(
  "GET /users",

  {
    response: {
      200: z.custom<Array<User>>(),
    },
  },

  async () => {
    const users = await selectUsers();

    return {
      statusCode: 200,
      body: users,
    };
  }
);
