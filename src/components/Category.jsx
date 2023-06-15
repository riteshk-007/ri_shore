import {  useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";




function Categorys() {
    const navigate = useNavigate()
    const [ category, setCategory] = useState([])
    const apidata = async()=>{
        try {
         
          let data = await fetch('https://fakestoreapi.com/products/categories');
          let res = await data.json();
          setCategory(res)
      
          
        } catch (error) {
         console.log(error)
        }
    }
    useEffect(()=>{
        apidata()
    },[])

    const location = useLocation()

    
    
    return (
        <div>
            <div className="w-full flex items-center justify-center sm:p-5">
                <div className="container  flex items-center justify-evenly flex-wrap">
                   
                {
                    category.map((item, index)=>{
                        return (
                           
                             <div className="w-32 sm:w-72 h-20  m-2 shadow-xl rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 overflow-hidden relative" key={index} onClick={()=> navigate(`${location.pathname = '/category'}/${item}`)}>
                                    <div className="sm:text-xl text-sm w-full text-center text-white sm:font-bold uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">{item}</div>
                            </div>
                            
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Categorys
