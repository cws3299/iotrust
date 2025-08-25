import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <h1 className="text-popular-color">Hello world!</h1>;
}
