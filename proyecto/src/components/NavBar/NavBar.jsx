import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import imagen from "./logo.png"

const NavBar = () => {
  return (
    <header className='navBar'>
      <div className='brand'>
        <img src={imagen} alt="Logo de la marca"/>
      </div>
      <nav>
        <ul className='categorias'>
        <li>Todos</li>
          <li>Broches</li>
          <li>Pulsera</li>
          <li>Aros</li>
          <li>Anillos</li>
          <li>Lentes</li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar