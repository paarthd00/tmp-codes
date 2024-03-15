import { createContext } from "react";

export const LanguageContext = createContext(["javascript", () => {}] as [
  string,
  (language: string) => void,
]);

export const EditorContext = createContext(["// some comment", () => {}] as [
  string,
  (code: string) => void,
]);
