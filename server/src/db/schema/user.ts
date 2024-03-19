import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  username: text("username").notNull(),
  email: text("email").notNull(),
});

export type userType = typeof users.$inferSelect;
