import { createLazyFileRoute } from "@tanstack/react-router";

import "../App.css";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import AiHelp from "@/components/ai-help"
import CustomEditor from "../components/custom-editor";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-between">
      <ResizablePanelGroup className="pt-[4rem]" direction="horizontal">
        <ResizablePanel>
          <CustomEditor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <AiHelp />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
