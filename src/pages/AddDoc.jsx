import { Button, Input, Box, Heading, VStack, useToast, Container, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/config/firebase";

const AddDoc = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    price: 0.0,
    thumbnail: "",
    category: "",
    images: "", // Usamos string para ingresar varias URLs separadas por coma
  });

  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Convierte el string de imágenes en array, eliminando espacios vacíos
    const imagesArray = formState.images
      .split(",")
      .map((img) => img.trim())
      .filter((img) => img.length > 0);

    const productsCollection = collection(db, "products");

    addDoc(productsCollection, {
      ...formState,
      images: imagesArray,
    })
      .then(({ id }) => {
        toast({
          title: "Producto creado",
          description: `El producto fue agregado correctamente (ID: ${id})`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setFormState({
          title: "",
          description: "",
          price: 0.0,
          thumbnail: "",
          category: "",
          images: "",
        });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "No se pudo agregar el producto.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => setLoading(false));
  };

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
        <Heading color="teal.600" mb={6} textAlign="center">
          Agregar producto
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <Input
              type="text"
              placeholder="Título"
              value={formState.title}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  title: e.target.value,
                });
              }}
              isRequired
              size="lg"
              bg="gray.50"
              borderRadius="md"
            />
            <Input
              type="text"
              placeholder="Descripción"
              value={formState.description}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  description: e.target.value,
                });
              }}
              isRequired
              size="lg"
              bg="gray.50"
              borderRadius="md"
            />
            <Input
              type="number"
              placeholder="Precio"
              value={formState.price}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  price: Number(e.target.value),
                });
              }}
              isRequired
              size="lg"
              bg="gray.50"
              borderRadius="md"
            />
            <Textarea
              placeholder="Imagen de detalle (URLs separadas por coma)"
              value={formState.images}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  images: e.target.value,
                });
              }}
              isRequired
              size="lg"
              bg="gray.50"
              borderRadius="md"
            />
            <Input
              type="text"
              placeholder="Thumbnail"
              value={formState.thumbnail}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  thumbnail: e.target.value,
                });
              }}
              isRequired
              size="lg"
              bg="gray.50"
              borderRadius="md"
            />
            <Input
              type="text"
              placeholder="Categoría"
              value={formState.category}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  category: e.target.value,
                });
              }}
              isRequired
              size="lg"
              bg="gray.50"
              borderRadius="md"
            />
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              w="100%"
              borderRadius="full"
              isLoading={loading}
              loadingText="Agregando..."
            >
              Agregar
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default AddDoc;