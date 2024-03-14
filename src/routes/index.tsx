import { createFileRoute, createRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});
function Home() {
  return <div className="text-red-400">Home page</div>;
}
