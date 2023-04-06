import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const t = initTRPC.create({});

const appRouter = t.router({
  greetings: t.procedure.query(() => {
    return "hello world :^)";
  }),

  create: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Greeting ${input.name}`;
    }),
});

app.use(cors());
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(PORT, () => console.log(`🌞🌞🌞 Listening on ${PORT} 🌞🌞🌞`));

export type AppRouter = typeof appRouter;
