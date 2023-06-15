import { FaCartPlus, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import RelatedProduct from "../components/RelatedProduct";
import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ContexApp } from "../utils/Context";


function SingleProduct() {
  const location = useLocation()
  const [quantity, setQuantity] = useState(1)

  const { products, handleAddToCart } = useContext(ContexApp)

  const { id } = useParams()
  let Id = id - 1;
  useEffect(() => {
    window.scrollTo(0, 0)
    setQuantity(1)
  }, [location, setQuantity])

  // increment 
  const increment = () => {
    setQuantity((prev) => prev + 1)
  }
  // decrement 
  const decrement = () => {
    setQuantity((prev) => {
      if (prev === 1) return 1;
      return prev - 1
    })
  }

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-96 h-64 object-contain object-center rounded" src={products[Id]?.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{products[Id]?.title}</h1>
              <span className="title-font font-medium text-2xl text-gray-900 my-5">&#8377;{products[Id]?.price}</span>
              <p className="leading-relaxed my-4">{products[Id]?.description}</p>

              <div className="flex items-center justify-center sm:justify-start border-b border-gray-400 pb-4 flex-wrap">
                <div className="flex items-center justify-center mx-2 mb-1">
                  <span className="text-xl border px-4 text-black py-2 cursor-pointer" onClick={() => decrement()}>-</span>
                  <span className="text-xl border px-4 text-black py-2 ">{quantity}</span>
                  <span className="text-xl border px-4 text-black py-2 cursor-pointer" onClick={() => increment()}>+</span>
                </div>
                <button className="flex items-center justify-center  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none uppercase hover:bg-indigo-600"
                onClick={() =>
                   {handleAddToCart(products[Id], quantity)
                    setQuantity(1)}}>
                      <FaCartPlus className="mx-2"  /> Add To Cart</button>
              </div>
              <div className="flex items-start justify-center flex-col">

                <span className="font-bold m-1">Category: <span className="text-gray-500 font-thin">{products[Id]?.category}</span></span>
                <span className="font-bold m-1 flex items-center justify-center">Share: <span className="text-gray-500 font-thin flex items-center justify-center">
                  <FaFacebookF className="mx-1 cursor-pointer" /> <FaInstagram className="mx-1 cursor-pointer" /> <FaTwitter className="mx-1 cursor-pointer" /><FaLinkedinIn className="mx-1 cursor-pointer" />
                </span></span>
              </div>

            </div>
          </div>

          <RelatedProduct item={products[Id]?.category} />
        </div>
      </section>
    </div>
  )
}

export default SingleProduct
