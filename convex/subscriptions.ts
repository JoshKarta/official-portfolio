import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createSubscription = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("subscriptions", { text: args.email });
  },
});
