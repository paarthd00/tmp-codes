import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LanguageContext, EditorContext } from "@/context";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { aiPromptSchema } from "@/lib/validations";


export default function AiHelp() {
  const [language, setLanguage] = useContext(LanguageContext);
  const [code, setCode] = useContext(EditorContext);

  const aiHelpForm = useForm<z.infer<typeof aiPromptSchema>>({
    resolver: zodResolver(aiPromptSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const handleAIHelpSubmit = async (values: z.infer<typeof aiPromptSchema>) => {
    const { prompt } = values;
    try {
      const aiResponse = await fetch("/api/openai/code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "language": language,
          "prompt": prompt,
          "MaxTokens": "60",
          "Temperature": "0.5"
        }),
      }).then((response) => response.json());

      setCode(aiResponse.message);
      console.log(aiResponse.message);

      // console.log(aiResponse.choices[0].text);

    } catch (error) {
      alert("Error getting ai help");
    }
  }
  return (
    <div>
      <Form {...aiHelpForm}>
        <form
          onSubmit={aiHelpForm.handleSubmit(handleAIHelpSubmit)}
          className="py-10 px-4  flex items-center gap-3  w-full max-w-[600px] mx-auto rounded-lg shadow-lg"
        >
          <FormField
            control={aiHelpForm.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="w-[100%]">
                <FormControl>
                  <Input className="rounded" placeholder="Write post about C++" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="btn">AI help</Button>
        </form>
      </Form>
    </div>
  );
}