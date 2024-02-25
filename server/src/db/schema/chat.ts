import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";

import { users } from "./user";

export const chats = pgTable("chats", {
  id: serial("id").primaryKey(),
  prompt: text("prompt").notNull(),
  response: text("response").notNull(),
  chatUserId: integer("chatUserId").references(() => users.id),
});

export type chatType = typeof chats.$inferSelect;
