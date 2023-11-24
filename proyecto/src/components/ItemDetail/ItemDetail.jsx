import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CarritoContext } from '../../context/CarritoContext';
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ title, price, img, description, stock, id, categoryId }) => {
  document.title = `AUREO | ${title}`;

  const [cantidadAlCarrito, setCantidadAlCarrito] = useState(0);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const handleOnAdd = (cantidad) => {
    setCantidadAlCarrito(cantidad);
    const item = { id, title, price, img, categoryId };
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='ItemDetailContainer'>
    <article className='ItemDetail'>
      <h2>{title}</h2>
      <div className='infoDetalle'>
        <img className='ItemImg' src={img} alt={title} />
        <div className='textoDetalle'>
        <p className='descripcion'>{description} </p>
          <p className='precio'><strong>Precio:</strong> ${price}</p>
          <div>
            {cantidadAlCarrito > 0
              ? (
                <>
                  <Link to="/carrito-de-compras">
                    <button className='botonFinalizarCompra'>Finalizar Compra</button>
                  </Link>
                  <Link to="/">
                    <button className='botonFinalizarCompra'>Seguir Comprando</button>
                  </Link>
                </>
              )
              : (
                stock > 0
                  ? <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
                  : <p>El producto no se encuentra disponible.</p>
              )
            }
          </div>
          
        </div>
      </div>
    </article>
    </div>
  );
}

export default ItemDetail;




