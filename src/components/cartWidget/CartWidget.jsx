// Importa el ícono de carrito de compras de react-icons
import { FiShoppingCart } from "react-icons/fi";
// Importa los estilos del widget de carrito
import "./CartWidget.css"

// Componente que muestra el ícono del carrito y la cantidad de productos
function CartWidget () {
    return (
        <div className="cart-widget">
            <FiShoppingCart className="cart-icon"/>
            <span>0</span>
        </div>
    )
}

export default CartWidget