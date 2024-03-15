import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { useContext } from "react";
import { LanguageContext } from "@/context";
import { EditorContext } from "@/context";
export default function CustomEditor() {

  const [language, setLanguage] = useContext(LanguageContext);
  const [code, setCode] = useContext(EditorContext);
  console.log({ language });
  console.log({ code });

  const { theme } = useTheme();
  return (
    <div>
      <Editor
        theme={
          theme === "dark"
            ? "vs-dark"
            : "vs-light"
        }
        height="90vh"
        defaultLanguage={language || "javascript"}
        language={language}
        defaultValue={code}
        value={code}
      />
    </div>
  );
}
