import { useState } from "react";
import { Box, Heading, Image, SimpleGrid, Text, Spinner, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router";

// Componente para mostrar la tarjeta de un producto individual
const ItemCard = ({ id, image, title, description, price }) => {
  // Hook para navegar a la página de detalle del producto
  const navigate = useNavigate();
  // Estado para controlar si la imagen ya se cargó
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Box
      borderWidth={"1px"}
      borderRadius={"lg"}
      borderColor={"black"}
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "xl",
        borderColor: "green",
      }}
      onClick={() => navigate(`/item/${id}`)}
      cursor={"pointer"}
    >
      {/* Contenedor de la imagen del producto */}
      <Box position="relative" minH="200px" display="flex" alignItems="center" justifyContent="center">
        {/* Spinner de carga mientras la imagen no se ha cargado */}
        {!imgLoaded && (
          <Center
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            zIndex={1}
            bg="whiteAlpha.700"
            borderRadius="md"
          >
            <Spinner size="lg" color="teal.400" thickness="4px" />
          </Center>
        )}
        {/* Imagen del producto */}
        <Image
          src={image}
          maxWidth={"200px"}
          maxHeight={"200px"}
          objectFit={"contain"}
          mx={"auto"}
          bg="white"
          borderRadius="md"
          onLoad={() => setImgLoaded(true)}
          display={imgLoaded ? "block" : "none"}
        />
      </Box>
      {/* Información del producto */}
      <Box p={"4"}>
        <Heading size={"md"} marginBottom={"2"}>
          {title}
        </Heading>
        <Text noOfLines={3}>{description}</Text>
        <Text
          fontSize={"18px"}
          backgroundColor={"black"}
          color={"white"}
          display={"inline"}
          borderRadius={"lg"}
          padding={"0.5"}
        >
          ${price}
        </Text>
      </Box>
    </Box>
  );
};

// Componente para mostrar una lista de productos en un grid responsivo
function ItemListContainer({ products }) {
  return (
    <SimpleGrid columns={{ lg: 4, md: 3, sm: 1 }} spacing={4} margin={4}>
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          image={product.thumbnail}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </SimpleGrid>
  );
}

export default ItemListContainer;