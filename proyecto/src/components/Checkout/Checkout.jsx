import { useState, useContext, useEffect } from "react"
import { db } from "../../service/firebase"
import { Timestamp, doc, getDoc } from "firebase/firestore"
import { CarritoContext } from "../../context/CarritoContext"
import Cart from "../Cart/Cart"
import CheckoutForm from '../CheckoutForm/CheckoutForm'



const Checkout = () => {
  document.title = `AUREO | Checkout`
  const { carrito, total, cantidadTotal } = useContext(CarritoContext)
  const [usuario, setUsuario] = useState(null)


const createOrder = async ({name,phone,email}) => {
    try {
        const objOreder = {
            buyer: {name,phone,email},
            items: carrito,
            total: total,
            date: Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db)
        const outOfStock = []
    }catch (error) {
        console.error("Error al crear la orden:", error);
      }

}
if(orderId) {
    return <h1>El Id de su orden es: {orderId}</h1>
}

return (
    <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder}/>
    </div>
)

}

export default Checkout