import './App.css'
// import { Button } from "@/components/ui/button"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ChatHistory } from './components/chat-history'
import Chats from './components/chats'


function App() {

  return (
    <div className="w-[100vw] h-[100vh] flex justify-between">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <Chats />
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel>Editor</ResizablePanel>
        <ResizableHandle />

        <ResizablePanel>
          <ChatHistory />
        </ResizablePanel>
      </ResizablePanelGroup>

    </div>
  )
}

export default App
