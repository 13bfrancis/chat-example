import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { unstable_getServerSession } from "next-auth";
import { options } from "../pages/api/auth/[...nextauth]";

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => {
  const session =
    opts && (await unstable_getServerSession(opts?.req, opts?.res, options));

  return {
    req: opts?.req,
    res: opts?.res,
    session,
  };
};
type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => {
  return trpc.router<Context>();
};
