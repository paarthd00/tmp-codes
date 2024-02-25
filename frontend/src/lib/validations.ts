import * as z from "zod";

export const email = z.string().email();
export const password = z.string().min(8).max(100);

export const aiPromptSchema = z.object({
  prompt: z.string(),
});
