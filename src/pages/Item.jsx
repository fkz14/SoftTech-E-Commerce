import { useParams } from "react-router";
import { useTitle } from "../hooks/useTitle";
import { useGetItemFirestore } from "../hooks/useGetItemFirestore";
import ItemDetailContainer from "../components/itemDetailContainer/ItemDetailContainer";
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";

const Item = () => {
  useTitle("Detalle de producto | SoftTech");
  const { id } = useParams();

  const { item: product, loading } = useGetItemFirestore("products", id);

  if (loading) {
    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        zIndex={9999}
        bgGradient="linear(to-br, gray.900, gray.700)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={4}>
          <Spinner size="xl" thickness="6px" speed="0.7s" color="teal.400" />
          <Text color="white" fontSize="2xl" fontWeight="bold">
            Cargando producto...
          </Text>
        </VStack>
      </Box>
    );
  }

  return <ItemDetailContainer product={product} />;
};

export default Item;