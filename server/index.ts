import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { createUsers, getUsers, greetings } from "./apis/users";
import { initTRPC } from "@trpc/server";
import { z } from "zod";

// routing
const t = initTRPC.create({});

const appRouter = t.router({
  greetings: t.procedure.output(z.string()).query(async () => {
    return await greetings();
  }),

  users: t.procedure
    .output(
      z.array(z.object({ id: z.number(), name: z.string(), email: z.string() }))
    )
    .query(async () => {
      const users = await getUsers();
      return users;
    }),

  createUser: t.procedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      return createUsers(input.name, input.email);
    }),
});

// express
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/trpc", trpcExpress.createExpressMiddleware({ router: appRouter }));
app.listen(PORT, () => console.log(`🌞🌞🌞 Listening on ${PORT} 🌞🌞🌞`));

export type AppRouter = typeof appRouter;
