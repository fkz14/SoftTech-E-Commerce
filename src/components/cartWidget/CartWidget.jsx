import { FiShoppingCart } from "react-icons/fi";
import "./CartWidget.css"

function CartWidget () {
    return (
        <div className="cart-widget">
            <FiShoppingCart className="cart-icon"/>
            <span>0</span>
        </div>
    )
}

export default CartWidget