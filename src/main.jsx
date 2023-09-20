import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Favorite from "./pages/Favorite.jsx";

const router = createBrowserRouter([
  {
    path: "/road-runner/",
    element: <App />,
    children: [
      {
        path: "/road-runner/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/road-runner/catalog",
            element: <Catalog />,
          },
          {
            path: "/road-runner/favorites",
            element: <Favorite />,
          },
          { path: "*", element: <Navigate to="/road-runner/" replace /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
