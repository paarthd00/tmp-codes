import OpenAI from "openai";
import { type Message } from "./messages";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Model =
  | "gpt-4-vision-preview"
  | "gpt-4-1106-preview"
  | "gpt-3.5-turbo-1106";

export async function runModel({
  model,
  messages,
}: {
  model: Model;
  messages: Message[];
}) {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    model,
    stream: true,
    messages,
    max_tokens: 4096,
  };
  // https://github.com/openai/openai-node/blob/master/helpers.md#events
  // https://github.com/openai/openai-node/
  // const iterator = await openai.chat.completions.create(params)
  const iterator = await openai.beta.chat.completions.stream(params);
  return iterator;
}

export async function streamForIterator(
  // iterator: ReturnType<typeof openai.beta.chat.completions.stream>,
  iterator: Awaited<ReturnType<typeof runModel>>,
  completion?: ({ completedResponse }: { completedResponse: string }) => void
) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async pull(controller) {
      let completedResponse = "";
      for await (const chunk of iterator) {
        const chunkOfContent = chunk.choices[0]?.delta.content;
        controller.enqueue(encoder.encode(chunkOfContent || undefined));
        completedResponse += chunkOfContent || "";
      }

      // const chatCompletion = await iterator.finalChatCompletion();

      // if (completion) {
      //   await completion({ completedResponse: chatCompletion.choices[0]?.message.content || "" })
      // }

      if (completion) {
        await completion({ completedResponse });
      }
      controller.close();
    },
  });

  return stream;
}
