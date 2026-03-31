
import './app.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/homepage/Banner';
import StatsSection from './components/homepage/StatsSection';
import AllProducts from './components/homepage/allProducts/AllProducts';
import { useState } from 'react';

export function App() {

   const [productCart, setProductCart] = useState([]);

  return (
    <>
      <Navbar productCart={productCart} />
      <Banner />
      <StatsSection />
      <AllProducts productCart={productCart} setProductCart={setProductCart} />
    </>
  )
}
