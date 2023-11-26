import { useState, useContext } from "react";
import { db } from "../../service/firebase";
import { Timestamp, writeBatch, collection, addDoc, doc, increment } from "firebase/firestore";
import { CarritoContext } from "../../context/CarritoContext";
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  document.title = `AUREO | Checkout`;
  const { carrito, total } = useContext(CarritoContext);
 
  const [orderId, setOrderId] = useState(null);

  const createOrder = async ({ name, phone, email }) => {
    try {
      const objOrder = {
        buyer: { name, phone, email },
        items: carrito,
        total: total,
        date: Timestamp.fromDate(new Date())
      };

      const batch = writeBatch(db);

    
      for (const item of objOrder.items) {
        const productRef = doc(db, 'items', item.item.id);
        batch.update(productRef, { stock: increment(-item.cantidad) });
      }

  
      await batch.commit();

   
      const ordersCollection = collection(db, 'orders');
      const orderDocRef = await addDoc(ordersCollection, objOrder);

      
      setOrderId(orderDocRef.id);

    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  if (orderId) {
    return <h1>El Id de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
