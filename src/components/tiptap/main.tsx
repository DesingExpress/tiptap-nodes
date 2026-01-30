import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import "./index.scss";
import type { Editor } from "@tiptap/react";

function Main({ onReady }: { onReady: (editor: Editor) => void }) {
  return (
    <div className="tiptap-editor-nxv">
      <SimpleEditor onReady={onReady} />
    </div>
  );
}
export default Main;
