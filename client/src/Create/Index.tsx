import { trpc } from "../trpc";

export function Index() {
  const msg = trpc.create.useQuery({ name: "hoge" });
  console.log(msg);
  console.log(msg.data);

  return <div>{msg.data}</div>;
}
