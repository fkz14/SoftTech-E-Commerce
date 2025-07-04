// Importa la función para crear el router de la aplicación
import { createBrowserRouter } from "react-router-dom";
// Importa las páginas y layouts principales
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Item from "../pages/Item";
import Category from "../pages/Category";
import NotFound from "../pages/NotFound";
import Memo from "../pages/Memo";
import AddDoc from "../pages/AddDoc";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

// Definición de las rutas principales de la aplicación
const routes = [
  {
    // Ruta raíz, utiliza el layout principal
    path: "/",
    element: <MainLayout />,
    children: [
      {
        // Ruta para la página de inicio
        path: "/",
        element: <Home />,
      },
      {
        // Ruta para el detalle de un producto, recibe un parámetro de ID
        path: "/item/:id",
        element: <Item />,
      },
      {
        // Ruta para mostrar productos por categoría, recibe un parámetro de ID
        path: "/category/:id",
        element: <Category />,
      },
       {
        // Ruta para mostrar productos por categoría, recibe un parámetro de ID
        path: "/cart",
        element: <Cart />,
      },
      {
        // Ruta para mostrar productos por categoría, recibe un parámetro de ID
        path: "/checkout",
        element: <Checkout />,
      },
      {
        // Ruta para agregar un nuevo documento/producto
        path: "/add-doc",
        element: <AddDoc />,
      },
      {
        // Ruta para la página de ejemplo de memoización
        path: "/memo",
        element: <Memo />,
      },
    ],
  },
  {
    // Ruta para manejar páginas no encontradas (404)
    path: "*",
    element: <NotFound />,
  },
];

// Crea y exporta el router de la aplicación
export const router = createBrowserRouter(routes);