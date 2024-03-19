import { createLazyFileRoute } from "@tanstack/react-router";
import "../App.css";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import AiHelp from "@/components/ai-help"
import CurrentModeTabs from "../components/current-mode-tabs";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { user } = useKindeAuth();
  console.log("user", user);
  return (
    <div className="w-[100vw] h-[100vh] px-0 flex justify-between container overflow-hidden">
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
