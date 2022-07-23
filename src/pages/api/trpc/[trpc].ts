import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { createContext, createRouter } from "../../../server/context";
import { userRouter } from "../../../server/routers/userRouter";

export const appRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input, ctx }) {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    },
  })
  .merge(userRouter);

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
