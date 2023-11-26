import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/items/:itemId' element={<ItemDetailContainer />} />
          <Route path='/carrito-de-compras' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkoutForm' element={<CheckoutForm />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;

