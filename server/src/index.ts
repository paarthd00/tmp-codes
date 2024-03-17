import { Hono } from "hono";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello This is the tmp code backend server!");
});

app.post("/openai/code", async (c) => {
  const { prompt } = await c.req.json();
  const { language } = await c.req.json();
  console.log("code");
  console.log("prompt", prompt);
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          prompt +
          " please provide code nothing else, just code in" +
          language +
          " language",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return c.json({ message: chatCompletion.choices[0].message.content });
});

app.post("/openai/chat", async (c) => {
  const { prompt } = await c.req.json();
  console.log("chat");
  console.log("prompt", prompt);

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt + " Please explain this to me",
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
