import { trpc } from "../trpc";
import { useState } from "react";

export function Index() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const createMutation = trpc.createUser.useMutation();

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name == "name") {
      setName(value);
    } else if (name == "email") {
      setEmail(value);
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createMutation.mutate({ name: name, email: email });
  }

  return (
    <div className="w-1/2">
      <p className="p-2 text-red-700">
        {createMutation.error && createMutation.error.message}
      </p>

      <form
        method="post"
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col gap-5"
      >
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => onChange(e)}
          className="bg-zinc-700 text-zinc-200 px-4 rounded-md"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => onChange(e)}
          className="bg-zinc-700 text-zinc-200 px-4 rounded-md"
          placeholder="Your Email"
        />

        <input
          type="submit"
          value="+ Create"
          className="bg-zinc-700 hover:bg-green-800 transition-all duration-200"
        />
      </form>
    </div>
  );
}
