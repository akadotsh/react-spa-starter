import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import NotFound from "./NotFound";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFound,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
