import { createRoot, type Root } from "react-dom/client";
import { App } from "./components/app";

const root: Root = createRoot(document.getElementById("root")!);
root.render(<App />);
