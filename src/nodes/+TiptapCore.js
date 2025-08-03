import { Pure } from "@design-express/fabrica";
import Editor from "../pages/root";


export class TiptapCore extends Pure {
  static path = "Tiptap";
  static title = "Tiptap[Core]";
  static description = "";

  constructor() {
    super();
    this.addInput("plugins", "Tiptap::plugins");
    this.addOutput("component", "component");
  }

  onExecute() {
    this.setOutputData(1, <Editor/>);
  }
}
