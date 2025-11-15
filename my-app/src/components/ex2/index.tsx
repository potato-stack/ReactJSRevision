import { createRoot, type Root } from "react-dom/client";
import { MainPage } from "./mainpage";

const root: Root = createRoot(document.getElementById("root")!);
root.render(<MainPage />);
