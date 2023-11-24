import React from 'react';
import { Link } from 'react-router-dom';
import "./Item.css";

const Item = ({ title, price, img, id }) => {
  return (
    <div className='card-container'>
    <article className='card'>
      <img className='ItemImg' src={img} alt={title} />
      <h4 className='card-title'>{title}</h4>
      <p>${price}</p>
      <Link to={`/items/${id}`}><button className='Option'>Ver Producto</button></Link>
    </article>
    </div>
  );
}

export default Item;






