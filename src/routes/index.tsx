import { createFileRoute, createRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});
function Home() {
  return <div>Home page</div>;
}
