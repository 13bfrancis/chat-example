import { createRouter } from "../context";

export const userRouter = createRouter().query("user", {
  resolve({ ctx }) {
    return {
      user: ctx.session?.user,
    };
  },
});
