import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import ItemCount from "../itemCount/ItemCount";

// Componente para mostrar el detalle de un producto individual
const ItemDetailContainer = ({ product }) => {
  // Estado para controlar si la imagen ya se cargó
  const [imgLoaded, setImgLoaded] = useState(false);

  // Renderiza el detalle del producto con imagen, información y botón de agregar al carrito
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        {/* Sección de la imagen del producto */}
        <Flex
          align="center"
          justify="center"
          minH={{ base: "300px", sm: "400px", lg: "500px" }}
          maxH={{ base: "300px", sm: "400px", lg: "500px" }}
          position="relative"
          w="100%"
        >
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
              <Spinner size="xl" color="teal.400" thickness="6px" />
            </Center>
          )}
          {/* Imagen principal del producto */}
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.images?.[0]}
            fit={"contain"}
            align={"center"}
            w="100%"
            h={{ base: "300px", sm: "400px", lg: "500px" }}
            maxH={{ base: "300px", sm: "400px", lg: "500px" }}
            border={"2px"}
            borderColor={"black"}
            objectFit="contain"
            bg="white"
            onLoad={() => setImgLoaded(true)}
            display={imgLoaded ? "block" : "none"}
          />
        </Flex>
        {/* Sección de información y acciones del producto */}
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            {/* Título del producto */}
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.title}
            </Heading>
            {/* Precio del producto */}
            <Text
              color={"white"}
              fontWeight={300}
              fontSize={"2xl"}
              backgroundColor={"black"}
              display={"inline"}
              borderRadius={"5"}
              padding={"0.5"}
            >
              ${product.price}
            </Text>
          </Box>

          {/* Descripción del producto */}
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {product.description}
              </Text>
            </VStack>
          </Stack>

          {/* Componente para agregar o quitar el producto del carrito */}
          <ItemCount product={product} />

          {/* Información de envío */}
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ItemDetailContainer;