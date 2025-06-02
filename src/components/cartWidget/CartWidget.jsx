// Importa el ícono de carrito de compras de react-icons
import { FiShoppingCart } from "react-icons/fi";
// Importa los estilos del widget de carrito
import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

// Componente que muestra el ícono del carrito y la cantidad total de productos
function CartWidget() {
  // Obtiene la función para contar los productos en el carrito desde el contexto
  const { getTotalCount } = useContext(CartContext);
  // Calcula la cantidad total de productos en el carrito
  const totalCount = getTotalCount();

  // Renderiza el ícono del carrito y la cantidad de productos
  return (
    <div className="cart-widget">
      <FiShoppingCart className="cart-icon" />
      <span>{totalCount}</span>
    </div>
  );
}

export default CartWidget;