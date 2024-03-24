import { createFileRoute, createRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
export const Route = createFileRoute("/")({
  component: Home,
});
function Home() {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["repoInfo"],
  //   queryFn: () =>
  //     fetch("fetch url").then((res) =>
  //       res.json()
  //     ),
  // });

  // if (isPending) return <div>Loading...</div>;
  // if (error) return <div>Error</div>;

  return <div>React + Tanstack (Query + Router) starter template</div>;
}
