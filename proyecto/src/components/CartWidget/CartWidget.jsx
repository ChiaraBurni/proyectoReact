import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import "./CartWidget.css"

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className='cartWidget'>
      <span className="material-symbols-outlined"><img src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png" alt="carrito" /></span>
      <p>{cantidadTotal}</p>
    </div>
  );
}

export default CartWidget;