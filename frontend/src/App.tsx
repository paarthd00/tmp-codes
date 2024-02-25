import './App.css'
// import { Button } from "@/components/ui/button"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ChatHistory } from './components/chat-history'
import Chats from './components/chats'
import Header from './components/header'

import CustomEditor from './components/custom-editor'
function App() {

  return (
    <div className="w-[100vw] h-[100vh] flex justify-between">
      <Header />
      <ResizablePanelGroup className='pt-[4rem]' direction="horizontal">

        <ResizablePanel>
          <CustomEditor />
        </ResizablePanel>
        <ResizableHandle />

        <ResizablePanel>
          <ChatHistory />
        </ResizablePanel>
      </ResizablePanelGroup>

    </div>
  )
}

export default App
