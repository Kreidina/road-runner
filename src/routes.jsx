import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import App from "./App.jsx";

import Layout from "./components/Layout/Layout.jsx";
const Home = lazy(() => import("./pages/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog.jsx"));
const Favorite = lazy(() => import("./pages/Favorite.jsx"));

// export const Routes = () => {
//   let element = useRoutes([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//         {
//           path: "/catalog",
//           element: <Catalog />,
//         },
//         {
//           path: "/favorites",
//           element: <Favorite />,
//         },
//         { path: "*", element: <Navigate to="/" replace /> },
//       ],
//     },
//   ]);
//   return element;
// };

export const router = createBrowserRouter([
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
