// Importa los componentes de Chakra UI para el diseño del layout
import { Box, Flex } from "@chakra-ui/react";
// Importa el componente de navegación principal
import NavBar from "../components/navBar/NavBar";
// Importa Outlet para renderizar las rutas hijas
import { Outlet } from "react-router-dom";

// Componente de layout principal que estructura la aplicación
const MainLayout = () => {
  return (
    <Box>
      {/* Barra de navegación superior */}
      <NavBar />
      {/* Contenedor flexible para el contenido principal */}
      <Flex height={"100%"} width={"100%"} maxWidth={"100%"}>
        {/* Renderiza la ruta hija correspondiente */}
        <Outlet />
      </Flex>
    </Box>
  );
};

export default MainLayout;