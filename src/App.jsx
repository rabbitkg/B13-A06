import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Products from './components/homepage/products/Products'
import RatingSection from './components/homepage/ratingSection/RatingSection'
import Navbar from './components/navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import GetStarted from './components/othersComponents/GetStarted'
import Footer from './components/footer/Footer'

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const ProductsPromise = fetchProducts();
  const [count, setCount] = useState(0)
  return (
    <>

      <Navbar count={count}/>
      <Banner />
      <RatingSection />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
      }>
        <Products ProductsPromise={ProductsPromise} setCount={setCount} count={count}/>
      </Suspense>
      <GetStarted/>
      <Footer/>


      <ToastContainer 
        position="top-right"
        // toastStyle={{ marginTop: "70px" }}
        className="mt-18"
      />
    </>
  )
}

export default App
