import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "../../service/firebase";
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();  

  useEffect(() => {
    const nuevoDoc = doc(db, "items", itemId);  

    getDoc(nuevoDoc)
      .then(response => {
        const data = response.data();
        const nuevoProducto = { id: response.id, ...data };
        setProducto(nuevoProducto);
      })
      .catch(error => console.log("Se produjo un error", error));
  }, [itemId]);  

  return (
    <main>
      <ItemDetail {...producto} />
    </main>
  );
}

export default ItemDetailContainer;



