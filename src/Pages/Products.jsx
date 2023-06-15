import { useLocation } from "react-router-dom"
import Products from "../components/Products"
import { useEffect } from "react"

function Producted() {
  const location  = useLocation()
  useEffect(()=>{
      window.scrollTo(0, 0)
  },[location])
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center sm:justify-start">
      <h2 className="uppercase text-2xl my-6 border-b-4 border-purple-700  sm:ml-16">All Product</h2>
   </div>
      <Products/>
    </div>
  )
}

export default Producted
