import { createRoot, type Root } from "react-dom/client";
import { App1 } from "./app";

const root: Root = createRoot(document.getElementById("root")!);
root.render(<App1 />);
