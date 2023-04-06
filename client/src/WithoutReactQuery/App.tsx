import { AppRouter } from "../../../server";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { useEffect, useState } from "react";

const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: "http://localhost:3000/trpc" })],
});

export function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchGreeting = async () => {
      const greeting = await client.greetings.query();
      setMessage(greeting);
    };

    fetchGreeting();
  }, []);

  return (
    <div>
      tRPC without ReactQuery:
      <span className="bg-zinc-200 text-zinc-900 border px-2 ml-5 rounded-md">
        {message}
      </span>
    </div>
  );
}
