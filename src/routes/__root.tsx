import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NotFound from "../NotFound";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

const queryClient = new QueryClient();
function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Link to="/" activeOptions={{ exact: true }}>
          Home
        </Link>

        <Link style={{ marginLeft: "8px" }} to="/about">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
