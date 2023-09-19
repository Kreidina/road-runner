// import { Navigate, Route, Routes } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { lazy } from "react";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorite = lazy(() => import("./pages/Favorite"));

const router = createBrowserRouter([
  {
    path: "/road-runner/",
    element: <App />,
    children: [
      {
        path: "/road-runner/catalog",
        element: <Catalog />,
      },
      {
        path: "/road-runner/favorites",
        element: <Favorite />,
      },
    ],
  },
]);
