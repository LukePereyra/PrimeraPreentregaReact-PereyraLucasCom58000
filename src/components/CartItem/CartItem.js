import React from "react";

const CartItem = ({ item, quantity, removeItem }) => {

    console.log("Item dentro de CartItem:", item)
    if (!item || !item.imagen) {
        return <div>No se encontró la imagen del producto.</div>;
    }

    return (
        <div className="CartItem">
            <img src={item.imagen} alt={item.name}/>            
            <h3>{item.name}</h3>
            <p>${item.precio}</p>
            <p>Cantidad: {quantity}</p>
            <button onClick={() => removeItem(item.id)}>Quitar</button>
        </div>
    );
}


export default CartItem;
