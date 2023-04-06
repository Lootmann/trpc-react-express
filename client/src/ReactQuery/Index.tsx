import { trpc } from "../trpc";

export function Index() {
  const greetings = trpc.greetings.useQuery();

  return (
    <div className="flex">
      tRPC with ReactQuery:
      <span className="bg-zinc-200 text-zinc-900 border px-2 ml-5 rounded-md">
        {greetings.data}
      </span>
    </div>
  );
}
