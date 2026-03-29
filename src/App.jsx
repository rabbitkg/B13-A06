import { Suspense } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Products from './components/homepage/products/Products'
import RatingSection from './components/homepage/ratingSection/RatingSection'
import Navbar from './components/navbar/Navbar'

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const ProductsPromise = fetchProducts();
  return (
    <>

      <Navbar />
      <Banner />
      <RatingSection />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
      }>
        <Products ProductsPromise={ProductsPromise} />
      </Suspense>
    </>
  )
}

export default App
