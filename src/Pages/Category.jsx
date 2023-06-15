
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Product from "../components/Product";



function Category() {
  const [ data, setCategory] = useState('')
  const {category} = useParams()
  const apidata = async()=>{
      try {
       
        let data = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        let res = await data.json();
        setCategory(res)
    
        
      } catch (error) {
       console.log(error)
      }
  }  
  useEffect(()=>{
    apidata()
    window.scrollTo(0,0)
  },[])

  return (
   <>
   <div className="container mx-auto flex items-center justify-center sm:justify-start">
   <h2 className="uppercase text-2xl my-6 border-b-4 border-purple-700  sm:ml-16">{category}</h2>
   </div>
    <div className="container mx-auto flex items-center justify-center  flex-wrap">
              {data &&
                data.map((item)=>{
                  return <Product key={item.id} item={item}/>
                })
              }

    </div>
    


   </>
  )
}

export default Category
