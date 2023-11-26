import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='navBar'>
      <div className='brand'>
      <Link to='/'> <img src='https://i.pinimg.com/564x/13/35/6e/13356e09ba81c5bbe77f9a3433fead50.jpg' alt="Logo de la marca" /></Link>
       
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

