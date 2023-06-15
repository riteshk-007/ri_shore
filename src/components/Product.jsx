import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Product({item}) {
  // eslint-disable-next-line react/prop-types
  const {image,title, price, id } = item;
    
    const navigate = useNavigate()
  return (
    <>
     <div className="flex items-center sm:items-start overflow-hidden justify-center w-36 sm:w-80 flex-col m-2 shadow-sm cursor-pointer" onClick={()=>navigate(`/product/${id}`)}>
        <img src={image} alt="product" className="h-36 sm:h-80 object-contain  bg-gray-50 transition-all duration-500 hover:scale-105" />
     
            <div className="font-semibold text-xs sm:text-base m-2">
                {title}
            </div>
            <div className="font-semibold text-base m-2">
                &#8377; {price}
            </div>
            </div>

    </>
  )
}

export default Product
