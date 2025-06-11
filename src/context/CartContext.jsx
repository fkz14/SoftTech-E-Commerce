import { createContext, useState } from "react";

// Creamos el contexto del carrito para compartirlo en toda la app
const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  // Estado global del carrito, es un array de productos con cantidad
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  // Si el producto ya está, suma 1 a su cantidad
  // Si no está, lo agrega con cantidad 1
  const addProductToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Si ya existe, suma 1 a la cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Si no existe, lo agrega con cantidad 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Función para quitar un producto del carrito
  // Si la cantidad es 1, lo elimina del carrito
  // Si hay más de una unidad, resta 1 a la cantidad
  const removeProductFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct.quantity === 1) {
        // Si solo hay una unidad, elimina el producto
        return prevCart.filter((item) => item.id !== product.id);
      }

      // Si hay más de una, resta 1 a la cantidad
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const deleteProductFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Devuelve la cantidad total de productos en el carrito
  const getTotalCount = () => {
    return cart.reduce((total, item) => Number(total) + item.quantity, 0);
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
    return totalPrice;
  };

  // Provee el estado y las funciones del carrito a los componentes hijos
  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, removeProductFromCart, getTotalCount, deleteProductFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;