import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => {
  return {
    testingContext: "hi there",
  };
};
type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => {
  return trpc.router<Context>();
};
