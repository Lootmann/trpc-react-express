import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { App as ReactQueryApp } from "./ReactQuery/App";
import { App as WithoutReactQueryApp } from "./WithoutReactQuery/App";
import { App as CreateApp } from "./Create/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/react-query",
        element: <ReactQueryApp />,
      },
      {
        path: "/without",
        element: <WithoutReactQueryApp />,
      },
      {
        path: "/create",
        element: <CreateApp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
