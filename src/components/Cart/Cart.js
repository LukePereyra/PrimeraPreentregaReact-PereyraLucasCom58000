import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    console.log(cart);
    console.log(totalQuantity);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>Upss, no hay artículos en el Carrito</h1>
                <Link to='/'>
                    <button>Volver a la tienda</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map(item => (
                <CartItem
                    key={item.id}
                    item={item}  // Pasa el objeto completo como "item"
                    quantity={item.quantity}  // Asegúrate de que la propiedad sea la correcta
                    removeItem={clearCart}  // Pasando la función para eliminar
                />
            ))}
            <h3>Total: ${total}</h3>
            <div>
                <button onClick={() => clearCart()}>Vaciar Carrito</button>
                <Link to='/'>
                    <button>Seguir comprando</button>
                </Link>
                <Link to='/checkout'>
                    <button>Finalizar compra</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
