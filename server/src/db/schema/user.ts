import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  userId: text("userId").notNull(),
});

export type userType = typeof users.$inferSelect;
