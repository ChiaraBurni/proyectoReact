import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, stock, description}) => {
    return (
        <div className="card">
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Disponible: {stock}</p>
          <div> <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log('cantidad agregada ',quantity)}/></div>
        
        </div>
      </div>
      )

}

export default ItemDetail
