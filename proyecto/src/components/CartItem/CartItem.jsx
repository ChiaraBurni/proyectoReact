import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import ItemCartCount from "../ItemCartCount/ItemCartCount"

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="CartItem">
      <img src={item.img} alt={item.title} />
      <h2 title={item.title}>{item.title}</h2>
      <p>Precio unitario: ${item.price}</p>
      <ItemCartCount id={item.id} />
      <p>Subtotal: ${item.price * cantidad}</p>
      <button onClick={() => eliminarProducto(item.id)}>Eliminar Producto</button>
    </div>
  );
}

export default CartItem;