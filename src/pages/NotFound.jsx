import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();
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