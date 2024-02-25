import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

export default function CustomEditor() {
  return (
    <div>
      <Editor
        theme="vs-dark"
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </div>
  );
}
