import { useState } from 'react'
import Home from './Home'
import ContactForm from './components/Contact';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import { CartProvider } from './CartContext';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Error from './components/Error';
import ProductDetail from './components/ProductDetail';
import { ToastContainer } from 'react-toastify'; // Import the ToastContainer
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>

      <CartProvider >
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="" element={<Home />} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="notfound" element={<Error />} />
            <Route
              path="*"
              element={<Error />}
              status={404} // Set the status to 404 for not found pages
            />

          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </ CartProvider >

    </>
  )
}

export default App
