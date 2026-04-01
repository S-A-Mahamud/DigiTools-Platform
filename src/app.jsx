// Main application component for the DigiTools Platform
import './app.css';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/homepage/Banner';
import StatsSection from './components/homepage/StatsSection';
import AllProducts from './components/homepage/allProducts/AllProducts';
import StepsSection from './components/homepage/StepsSection';
import PricingSection from './components/homepage/PricingSection';
import WorkflowSection from './components/homepage/WorkflowSection';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';

export function App() {

  const [productCart, setProductCart] = useState([]);

  return (
    <>
      <header>
        <Navbar productCart={productCart} />
      </header>
      <main>
        <Banner />
        <StatsSection />
        <AllProducts productCart={productCart} setProductCart={setProductCart} />
        <StepsSection />
        <PricingSection />
        <WorkflowSection />
      </main>
      <footer>
        <Footer />
      </footer>

      {/*React Toast Container */}
      <ToastContainer />
    </>
  )
}
