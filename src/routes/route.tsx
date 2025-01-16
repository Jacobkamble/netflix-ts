import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "../components/Login";
import AppLayout from "../layout/AppLayout";
import Browse from "../components/Browse";

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    // path: "",
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
