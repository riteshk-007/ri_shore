import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Category from "./Pages/Category"
import SingleProduct from "./Pages/SingleProduct"
import Newsletter from "./components/Newsletter"
import AppConext from "./utils/Context"
import Categoryes from "./Pages/Categoryes"
import Producted from "./Pages/Products"
import PaymentForm from "./components/PaymentForm"


function App() {
  
  return (
    <>
    <BrowserRouter>
    <AppConext>
    <Header/>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Producted/>}/>
        <Route path="/category/:category" element={<Category/>}/>
        <Route path="/categoryes" element={<Categoryes/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/payment" element={<PaymentForm/>}/>
      </Routes>
      <Newsletter/>
      <Footer/>
    </AppConext>
    </BrowserRouter>
    </>
  )
}

export default App
