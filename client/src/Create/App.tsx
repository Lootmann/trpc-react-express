import { httpBatchLink } from "@trpc/client";
import { Index } from "./Index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "../trpc";
import { useState } from "react";

export function App() {
  const [queyrClinet] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queyrClinet}>
      <QueryClientProvider client={queyrClinet}>
        <Index />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
