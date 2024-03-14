import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return <div className="text-blue-400">About Page</div>;
}
