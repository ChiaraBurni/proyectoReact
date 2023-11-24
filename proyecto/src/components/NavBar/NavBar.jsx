import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import imagen from "./logo.png"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='navBar'>
      <div className='brand'>
      <Link to='/'> <img src={imagen} alt="Logo de la marca" /></Link>
       
      </div>
      <nav className='NavBar'>
      <NavLink to={'/'}>Todos</NavLink>
        <NavLink to={`/category/broche`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Broches</NavLink>
        <NavLink to={`/category/anillo`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Anillo</NavLink>
        <NavLink to={`/category/pendiente`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pendiente</NavLink>
        <NavLink to={`/category/pulsera`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pulsera</NavLink>
        <NavLink to={`/category/lentes`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Lentes</NavLink>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar

