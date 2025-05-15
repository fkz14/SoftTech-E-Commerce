import { useParams } from "react-router";
import ItemDetailContainer from "../components/itemDetailContainer/ItemDetailContainer";
import { useEffect, useState } from "react";
import { getProductById } from "../components/services/product.service";
import { Box, Center, Spinner, Text, VStack } from "@chakra-ui/react";

const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

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