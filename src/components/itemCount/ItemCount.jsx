// Importa los componentes Button y Flex desde Chakra UI para crear el botón y el contenedor flexible
import { Button, Flex } from "@chakra-ui/react";

// Componente funcional ItemCount
// Recibe dos props:
//   - product: el producto a agregar al carrito (no se utiliza en este componente)
//   - onAdd: función que se ejecuta al hacer clic en el botón para agregar el producto
const ItemCount = ({ product, onAdd }) => {
  // Renderiza un contenedor flexible centrado con un botón
  return (
    // Flex crea un contenedor con espacio entre elementos y centra el contenido
    <Flex gap={"5"} justifyContent={"center"}>
      {/* Botón que al hacer clic llama a la función onAdd con el argumento 1 */}
      <Button onClick={() => onAdd(1)}>Agregar al carrito</Button>
    </Flex>
  );
};

// Exporta el componente ItemCount para su uso en otros archivos
export default ItemCount;