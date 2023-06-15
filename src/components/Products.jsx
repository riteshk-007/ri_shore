import { useContext } from "react"
import Product from "./Product"
import { ContexApp } from "../utils/Context"

// eslint-disable-next-line react/prop-types
function Products({innerPage, headingText}) {
  const {products} = useContext(ContexApp)

  return (
    <div>
      <div className="container mx-auto flex items-center sm:justify-start justify-center">
      {!innerPage && <h2 className="uppercase text-2xl my-6 border-b-4 border-purple-700  sm:ml-16">{headingText}</h2>}
      </div>
      <div className="container mx-auto flex items-center justify-center flex-wrap m-2">
      {
      products && products?.map((item)=>{
        return  <Product item={item} key={item.id}/>
        })
      }
      </div>
    </div>
  )
}

export default Products
