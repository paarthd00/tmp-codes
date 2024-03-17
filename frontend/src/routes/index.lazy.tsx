import { createLazyFileRoute } from "@tanstack/react-router";

import "../App.css";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AiHelp from "@/components/ai-help"
import CurrentModeTabs from "../components/current-mode-tabs";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-between container">
      <ResizablePanelGroup className="pt-[4rem]" direction="horizontal">
        <ResizablePanel>
          <CurrentModeTabs />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <AiHelp />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
