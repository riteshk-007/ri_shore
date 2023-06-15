import Banner from "../components/Banner"
import Category from "../components/Category"
import { useContext, useEffect } from "react"
import { ContexApp } from "../utils/Context"
import Product from "../components/Product"
import { useLocation } from "react-router-dom"

function Home() {
  const {limit} = useContext(ContexApp)
  const location = useLocation()

  useEffect(()=>{
      window.scrollTo(0,0)
  },[location])
  return (
    <div>
        <Banner/>
        <Category/>
        <div className="container mx-auto flex items-center justify-center sm:justify-start">
        <h2 className="uppercase text-2xl my-6 border-b-4 border-purple-700  sm:ml-16">Popular Product</h2>
   </div>
        <div className="container mx-auto flex items-center justify-center flex-wrap">
          {
            limit.map((item)=>{
              return(<Product key={item.id} item={item}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default Home
