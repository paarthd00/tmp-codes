import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomEditor from "./custom-editor"
export default function ResizableTabs() {
    return (
        <Tabs defaultValue="account" className="w-100">
            <TabsList>
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="password">Chat</TabsTrigger>
            </TabsList>
            <TabsContent value="editor">
                <CustomEditor />
            </TabsContent>
            <TabsContent value="password">Chat Response here.</TabsContent>
        </Tabs>
    )
}
