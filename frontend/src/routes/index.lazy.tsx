import { createLazyFileRoute } from "@tanstack/react-router";

import "../App.css";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ChatHistory } from "../components/chat-history";

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
          <ChatHistory />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
