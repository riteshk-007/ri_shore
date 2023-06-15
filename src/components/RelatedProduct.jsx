
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RelatedProduct({ item }) {
  const [data, setCategory] = useState('')
  const apidata = async () => {
    try {

      let data = await fetch(`https://fakestoreapi.com/products/category/${item}`);
      let res = await data.json();
      setCategory(res)


    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    apidata()
  },[])
  const navigate = useNavigate()
  return (
    <>
      <h1 className="container mx-auto uppercase border-b text-2xl border-purple-500 mb-4 mt-6">related products</h1>
      <div className="container mx-auto flex items-center justify-center flex-wrap">
        {data &&
          data?.map((item) => {
            // eslint-disable-next-line react/prop-types
            const { image, id, title, price } = item;
            return (
              <div key={id}>
                {/* // eslint-disable-next-line react/prop-types, react/prop-types */}
                <div className="flex items-center sm:items-start overflow-hidden justify-center w-36 sm:w-80 flex-col m-2 shadow-sm cursor-pointer" onClick={()=>navigate(`/product/${id}`)}>
                        <img src={image} alt="product" className="h-36 sm:h-80 object-contain  bg-gray-50 transition-all duration-500 hover:scale-105" />
                    
                            <div className="font-semibold text-xs sm:text-base m-2">
                                {title}
                            </div>
                            <div className="font-semibold text-base m-2">
                                &#8377; {price}
                            </div>
                            </div>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default RelatedProduct
