import { Link, Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="min-h-screen bg-zinc-800 text-2xl text-slate-200 p-6">
      <header className="flex gap-10 border-b pb-5 mb-5">
        <Link
          to={`/`}
          className="bg-zinc-400 text-slate-900 hover:bg-fuchsia-600 px-2 rounded-md transition-all duration-200"
        >
          Top
        </Link>

        <Link
          to={`/react-query`}
          className="bg-zinc-400 text-slate-900 hover:bg-fuchsia-600 px-2 rounded-md transition-all duration-200"
        >
          React Query
        </Link>

        <Link
          to={`/without`}
          className="bg-zinc-400 text-slate-900 hover:bg-fuchsia-600 px-2 rounded-md transition-all duration-200"
        >
          Without
        </Link>

        <Link
          to={`/create`}
          className="bg-zinc-400 text-slate-900 hover:bg-fuchsia-600 px-2 rounded-md transition-all duration-200"
        >
          POST input
        </Link>
      </header>

      <Outlet />
    </div>
  );
}
