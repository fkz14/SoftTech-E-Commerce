import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Item from "../pages/Item";
import Category from "../pages/Category";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        // path --> Camino / la ruta
        // element --> El componente que se renderiza
        path: "/",
        element: <Home />, //JSX.Element // {React.ReactNode}
      },
      {
        path: "/item/:id", // URL Params: Son parametros de URL, es decir info adicional que podemos utilizar ":id".
        element: <Item />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
