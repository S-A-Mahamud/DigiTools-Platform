
import './app.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/homepage/Banner';
import StacksSection from './components/homepage/StacksSection';
import AllProducts from './components/homepage/allProducts/AllProducts';
import { useState } from 'react';

export function App() {

   const [productCart, setProductCart] = useState([]);

  return (
    <>
      <Navbar productCart={productCart} />
      <Banner />
      <StacksSection />
      <AllProducts productCart={productCart} setProductCart={setProductCart} />
    </>
  )
}
