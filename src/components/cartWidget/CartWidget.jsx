// Importa el ícono de carrito de compras de react-icons
import { FiShoppingCart } from "react-icons/fi";
// Importa los estilos del widget de carrito
import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext"; // <--- Cambia esto

// Componente que muestra el ícono del carrito y la cantidad de productos
function CartWidget() {
  const { getTotalCount } = useContext(CartContext);
  const totalCount = getTotalCount();

  return (
    <div className="cart-widget">
      <FiShoppingCart className="cart-icon" />
      <span>{totalCount}</span>
    </div>
  );
}

export default CartWidget;
