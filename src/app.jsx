
import './app.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/homepage/Banner';
import StacksSection from './components/homepage/StacksSection';
import AllProducts from './components/homepage/allProducts/AllProducts';

export function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <StacksSection />
      <AllProducts />
    </>
  )
}
