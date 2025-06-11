// Importa el ícono de carrito de compras de react-icons
import { FiShoppingCart } from "react-icons/fi";
// Importa los estilos del widget de carrito
import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

// Componente que muestra el ícono del carrito y la cantidad total de productos
function CartWidget() {
  // Obtiene la función para contar los productos y el estado del carrito desde el contexto
  const { getTotalCount, cart } = useContext(CartContext);

  // Calcula la cantidad total de productos en el carrito usando la función del contexto
  const totalCount = getTotalCount();

  const navigate = useNavigate();

  // Muestra en consola el contenido actual del carrito (útil para depuración)
  console.log(cart);

  // Renderiza el ícono del carrito y la cantidad de productos
  return (
    <div className="cart-widget" onClick={() => navigate("/cart")} >
      {/* Ícono de carrito */}
      <FiShoppingCart className="cart-icon" />
      {/* Cantidad total de productos en el carrito */}
      <span>{totalCount}</span>
    </div>
  );
}

export default CartWidget;