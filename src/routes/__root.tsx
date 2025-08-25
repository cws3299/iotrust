import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="h-full w-full max-w-[375px] mx-auto bg-background flex flex-col">
      <Outlet />
    </div>
  ),
});
