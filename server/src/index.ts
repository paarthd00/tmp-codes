import { Hono } from "hono";
import OpenAI from "openai";
import { db } from "./db";
import { users } from "./db/schema/user";
import { eq } from "./db";
const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello This is the tmp code backend server!");
});

app.post("/login", async (c) => {
  const { user } = await c.req.json();
  const dbUser = await db.select().from(users).where(eq(users.userId, user.id));

  if (dbUser.length === 0) {
    try {
      await db.insert(users).values({
        userId: user.id,
        username: user?.given_name + " " + user?.family_name,
        email: user.email,
      });
      return c.json({ success: "User added to db" });
    } catch (e) {
      return c.json({ error: "Error adding user to db" });
    }
  } else {
    return c.json({ success: "User already exists in db" });
  }
});

app.post("/openai/code", async (c) => {
  const { prompt, language, context } = await c.req.json();
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          prompt +
          " please provide code nothing else, just code no other word, just code not even an extra word, code without using Markdown formatting, just code in" +
          language +
          " language " +
          "based on this" +
          context,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return c.json({ message: chatCompletion.choices[0].message.content });
});

app.post("/openai/chat", async (c) => {
  const { prompt, context } = await c.req.json();

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt + " Please explain this to me based on this" + context,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return c.json({ message: chatCompletion.choices[0].message.content });
});

app.get("/history", async (c) => {
  // get history from db for user and return
});

app.post("/history/add", async (c) => {
  // add new history item to db for user and return
});

app.post("/history/delete", async (c) => {
  // add new history item to db for user and return
});

app.post("/history/update", async (c) => {
  // add new history item to db for user and return
});

app.get("/git", async (c) => {
  // get git from db for user and return
});

app.post("/git/add", async (c) => {
  // add new git item to db for user and return
});

app.post("/git/delete", async (c) => {
  // add new git item to db for user and return
});

app.post("/git/update", async (c) => {
  // add new git item to db for user and return
});

Bun.serve(app);
