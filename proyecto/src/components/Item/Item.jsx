import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({ id, name, img, stock }) => {
  return (
    <div className="card">
      <picture>
        <img src={img} alt={name} className='ItemImg' />
      </picture>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Disponible: {stock}</p>
        <Link to={`/item/${id}`} className='Option'>Descripción</Link>

      </div>
    </div>
  )

}



export default Item
