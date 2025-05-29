import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemCount = ({ product }) => {
  const { addProductToCart, removeProductFromCart, cart } = useContext(CartContext);

  // Busca el producto en el carrito para saber su cantidad
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <Flex gap={"5"} justifyContent={"center"}>
      <Button onClick={() => addProductToCart(product)}>Agregar item</Button>
      <Button
        onClick={() => removeProductFromCart(product)}
        disabled={quantity === 0}
      >
        Quitar item
      </Button>
    </Flex>
  );
};

export default ItemCount;