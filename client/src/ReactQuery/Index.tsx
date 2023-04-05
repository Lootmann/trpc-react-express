import { trpc } from "./trpc";

export function Index() {
  const greetings = trpc.greetings.useQuery();

  return (
    <div>
      <h1>{greetings.data}</h1>
    </div>
  );
}
