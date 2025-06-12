import { useParams } from "react-router";
import { useTitle } from "../hooks/useTitle";
import { useGetFirestoreDocs } from "../hooks/useGetFirestoreDocs";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import { Box, Spinner, Text, VStack } from "@chakra-ui/react"; // Agregado para la pantalla de carga

const Category = () => {
  useTitle("Categoría | SoftTech");
  const { id } = useParams();

  const { items: allProducts, loading, error } = useGetFirestoreDocs("products");
  const products = allProducts.filter((prod) => prod.category === id);

  // Pantalla de carga visual, igual que en Home.jsx
  if (loading)
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
            Cargando productos...
          </Text>
        </VStack>
      </Box>
    );

  if (error) return <div>Error al cargar productos.</div>;

  return <ItemListContainer products={products} />;
};

export default Category;