import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { App as ReactQueryApp } from "./ReactQuery/App";
import { App as WithoutReactQueryApp } from "./WithoutReactQuery/App";
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
        path: "/without-react-query",
        element: <WithoutReactQueryApp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
