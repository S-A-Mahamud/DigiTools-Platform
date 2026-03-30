
import './app.css';
import AllProducts from './components/homepage/allProducts/AllProducts';
import Banner from './components/homepage/Banner';
import StacksSection from './components/homepage/StacksSection';
import Navbar from './components/navbar/Navbar';

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
