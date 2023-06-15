import { useEffect } from "react"
import Categorys from "../components/Category"


function Categoryes() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  
  return (
    <div>
      <div className="container mx-auto flex items-center justify-start flex-col">
        <h2 className="uppercase font-semibold mx-3 text-2xl my-6 sm:ml-16">categories</h2>
                <div className="contanier">
                <Categorys/>
                </div>
        </div>
    </div>
  )
}

export default Categoryes
