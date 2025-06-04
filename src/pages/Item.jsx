// Importa los hooks y componentes necesarios de React, React Router y Chakra UI
import { useParams } from "react-router";
import ItemDetailContainer from "../components/itemDetailContainer/ItemDetailContainer";
import { useEffect, useState } from "react";
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import { db } from "../components/services/config/firebase";
import { doc, getDoc } from "firebase/firestore";

// Componente para mostrar el detalle de un producto individual
const Item = () => {
  // Obtiene el parámetro de ID desde la URL
  const { id } = useParams();

  // Estado para almacenar el producto obtenido
  const [product, setProduct] = useState({});
  // Estado para controlar la carga
  const [loading, setLoading] = useState(true);

  // Efecto para obtener los datos del producto cuando cambia el ID
  useEffect(() => {
    // Referencia al documento del producto en Firestore
    const productDoc = doc(db, "products", id);

    // Obtiene el documento del producto por ID
    getDoc(productDoc)
      .then((snapshot) => {
        // Guarda el producto en el estado, incluyendo su ID
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((e) => console.error(e)) // Muestra errores en consola si ocurren
      .finally(() => setLoading(false)); // Finaliza la carga
  }, [id]);

  // Muestra un spinner de carga mientras se obtienen los datos
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

  // Renderiza el contenedor de detalle del producto con la información obtenida
  return <ItemDetailContainer product={product} />;
};

export default Item;