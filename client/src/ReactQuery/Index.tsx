import { trpc } from "../trpc";

export function Index() {
  const greetings = trpc.greetings.useQuery();
  const users = trpc.users.useQuery();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex border p-2 rounded-md">
        <h1>tRPC with ReactQuery:</h1>

        <span className="bg-zinc-200 text-zinc-900 border px-2 ml-5 rounded-md">
          {greetings.data}
        </span>
      </div>

      <div className="border p-2 rounded-md">
        {users.data?.map((user) => (
          <p key={user.id}>
            {user.id}, {user.name}, {user.email}
          </p>
        ))}
      </div>
    </div>
  );
}
