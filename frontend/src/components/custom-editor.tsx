import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { useTheme } from "next-themes";
export default function CustomEditor() {
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
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </div>
  );
}
