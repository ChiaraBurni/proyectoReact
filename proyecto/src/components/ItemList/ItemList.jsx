import React from 'react';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = ({ products, titulo }) => {
  return (
    <div className='ItemList'>
      {titulo}
      {products.map(item => (
        <Link to={`/items/${item.id}`} key={item.id}>
          <Item {...item} />
        </Link>
      ))}
    </div>
  );
}

export default ItemList; 



