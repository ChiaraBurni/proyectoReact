import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import { db } from '../../service/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(db, "items"), where("categoryId", "==", categoryId)) 
      : collection(db, "items");

    getDocs(collectionRef)
      .then(response => {
        const newItems = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        console.log("Datos de Firebase:", newItems);
        setProducts(newItems);
      })
      .catch(error => console.log("Se produjo el error", error));
  }, [categoryId]);

  return (
    <main>
      {categoryId ? <h2 style={{ textAlign: "center" }}> {categoryId} </h2> : undefined} 
      <ItemList products={products} titulo={categoryId ? undefined : <h2>Products</h2>} />
    </main>
  );
}

export default ItemListContainer;

