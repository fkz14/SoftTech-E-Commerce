// Importa los componentes de Chakra UI necesarios para el diseño de la página
import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
// Importa useNavigate para redireccionar al usuario
import { useNavigate } from "react-router";

// Componente para mostrar una página de error 404 personalizada
export const NotFound = () => {
  // Hook para navegar a otras rutas
  const navigate = useNavigate();

  // Renderiza el mensaje de error y un botón para volver al inicio
  return (
    <Box
      minH="100vh"
      w="100vw"
      bgGradient="linear(to-br, #232526, #414345)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={6} p={12} bg="whiteAlpha.900" borderRadius="3xl" boxShadow="2xl" maxW="lg">
        <Heading
          as="h1"
          size="6xl"
          color="red.400"
          fontWeight="extrabold"
          letterSpacing="wider"
          mb={2}
        >
          404
        </Heading>
        <Text fontSize="2xl" color="gray.700" fontWeight="bold">
          ¡Ups! Página no encontrada
        </Text>
        <Text color="gray.500" fontSize="lg" textAlign="center">
          La página que buscas no existe o fue movida.<br />
          Verifica la URL o vuelve al inicio.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/")}
          _hover={{ bg: "teal.600" }}
        >
          Volver al inicio
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFound;