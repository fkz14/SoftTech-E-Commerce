// Importa ChakraProvider para aplicar los estilos globales de Chakra UI
import { ChakraProvider } from "@chakra-ui/react";
// Importa RouterProvider para manejar el ruteo de la aplicación
import { RouterProvider } from "react-router-dom";
// Importa la configuración de rutas
import { router } from "./routes";

// Componente principal de la aplicación
function App() {
  return (
    <>
      {/* ChakraProvider envuelve toda la app para habilitar los estilos de Chakra UI */}
      <ChakraProvider>
        {/* RouterProvider gestiona las rutas definidas en el router */}
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

export default App;