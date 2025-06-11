// Importa componentes de Chakra UI para el formulario y diseño
import { Button, Container, Input, useToast, Box, Heading, VStack, Text } from "@chakra-ui/react";
// Importa los hooks useContext y useState de React
import { useContext, useState } from "react";
// Importa el contexto del carrito
import CartContext from "../context/CartContext";
// Importa las funciones addDoc y collection de Firebase Firestore
import { addDoc, collection } from "firebase/firestore";
// Importa la instancia de la base de datos de Firebase
import { db } from "../services/config/firebase";
// Importa el hook personalizado para cambiar el título
import { useTitle } from "../hooks/useTitle";
// Importa el hook para navegar entre rutas
import { useNavigate } from "react-router-dom";

// Componente principal de Checkout
const Checkout = () => {
  // Cambia el título de la pestaña
  useTitle("Finalizar compra | SoftTech");

  // Estado para los campos del formulario
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  // Estado para indicar si está procesando la compra
  const [loading, setLoading] = useState(false);
  // Estado para almacenar el id de la orden generada
  const [orderId, setOrderId] = useState(null);

  // Obtiene el carrito y la función para calcular el total desde el contexto
  const { cart, getTotalPrice } = useContext(CartContext);

  // Hook para mostrar notificaciones
  const toast = useToast();
  // Hook para navegar entre rutas
  const navigate = useNavigate();

  // Maneja el envío del formulario
  const handleSumbit = (e) => {
    // Previene el comportamiento por defecto del formulario
    e.preventDefault();
    // Indica que está procesando
    setLoading(true);

    // Crea el objeto de datos de la orden
    const data = {
      buyer: formState,
      order: cart,
      total: getTotalPrice(),
    };
    // Referencia a la colección "cart" en Firestore
    const cartCollection = collection(db, "cart");
    // Agrega la orden a Firestore
    addDoc(cartCollection, data)
      .then(({ id }) => {
        // Almacena el id de la orden
        setOrderId(id);
        // Muestra notificación de éxito
        toast({
          title: "Compra finalizada",
          description: `Por cualquier reclamo indicar el numero de orden: ${id}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        // Redirige al inicio después de 5 segundos
        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((e) => {
        // Muestra notificación de error
        toast({
          title: "Error",
          description: "No se pudo finalizar la compra.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => setLoading(false)); // Finaliza la carga
  };

  // Si ya hay una orden generada, muestra el mensaje de agradecimiento
  if (orderId) {
    return (
      <Container maxW="lg" py={12}>
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          boxShadow="2xl"
          textAlign="center"
        >
          <Heading color="teal.500" mb={4}>¡Gracias por tu compra!</Heading>
          <Text fontSize="lg" mb={2}>
            Tu número de orden es:
          </Text>
          <Text fontWeight="bold" fontSize="2xl" color="teal.600" mb={4}>
            {orderId}
          </Text>
          <Text color="gray.500">
            Serás redirigido al inicio en unos segundos...
          </Text>
        </Box>
      </Container>
    );
  }

  // Renderiza el formulario de checkout
  return (
    <Container maxW="lg" py={12}>
      <Box
        bg="white"
        p={8}
        borderRadius="xl"
        boxShadow="2xl"
        maxW="md"
        mx="auto"
      >
        <Heading as="h1" color="teal.600" mb={6} textAlign="center">
          Finalizar compra
        </Heading>
        <form onSubmit={handleSumbit}>
          <VStack spacing={5}>
            {/* Campo para el nombre completo */}
            <Input
              type="text"
              placeholder="Nombre completo"
              value={formState.fullName}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  fullName: e.target.value,
                })
              }
              isRequired
              size="lg"
              bg="gray.50"
              borderRadius="md"
            />
            {/* Campo para el correo electrónico */}
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={formState.email}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  email: e.target.value,
                })
              }
              isRequired
              size="lg"
              bg="gray.50"
              borderRadius="md"
            />
            {/* Campo para el número de contacto */}
            <Input
              type="tel"
              placeholder="Número de contacto"
              value={formState.phoneNumber}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  phoneNumber: e.target.value,
                })
              }
              isRequired
              size="lg"
              bg="gray.50"
              borderRadius="md"
            />
            {/* Botón para enviar el formulario */}
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              w="100%"
              borderRadius="full"
              isLoading={loading}
              loadingText="Procesando..."
            >
              Comprar
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

// Exporta el componente Checkout
export default Checkout;