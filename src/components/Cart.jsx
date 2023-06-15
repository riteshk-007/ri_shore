import { useContext } from 'react';
import { ContexApp } from '../utils/Context';

import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function Cart({ setShowCart }) {
    const navigate = useNavigate()
  const { cartItems, handleRemove, handleCartProductQuantity, cartSubTotal} = useContext(ContexApp)
  return (
    <div className="w-screen h-screen fixed top-0 z-[100] left-0 overflow-hidden bg-black/40 flex items-center justify-end">
      <div className="bg-white w-full md:w-1/2 lg:w-1/4 absolute right-0 h-full  rightCart flex items-center justify-center flex-col ">
        <div className="flex w-full  items-center justify-between border-b border-gray-400 px-5 pb-4 text-gray-500">
          <span className="text-xl uppercase font-semibold">shopping cart</span>
          <span className="cursor-pointer text-lg font-semibold flex items-center justify-center" onClick={() => setShowCart(false)}> <MdClose fontSize={20} className='mx-1 mt-1' />close</span>
        </div>
        <div className="w-full h-4/5 flex items-center justify-start flex-col overflow-auto  relative  overflow-x-hidden">
          {/* products  */}

          {
          !cartItems.length && 
          <div className='w-full h-full p-3 bg-gray-100 flex items-center justify-center  flex-col'>
                <BsCartX fontSize={150} className='text-gray-300'/>
                <span className='capitalize font-semibold my-3 sm:text-base text-sm'>no product in the cart.</span>
                <button className='uppercase bg-indigo-500 px-4 my-2 py-2 text-white cursor-pointer'
                 onClick={()=>{
                  navigate('/products')
                  setShowCart(false)
                  }}>
                  return to shop</button>
          </div>
          
          }
          {
            cartItems.map((items) => {

              const { image, quantity, title, price } = items
              return (
                <div key={items.id} className='w-full'>
                  <div className="w-full h-32 p-3 bg-gray-100/30 flex items-center justify-center flex-wrap relative flex-col hover:bg-gray-100 select-none">
                    <img src={image} alt="items" className='h-20 w-20 object-contain border border-gray-300' />
                    <MdClose fontSize={20} className='mx-1 mt-1 cursor-pointer absolute right-3 top-3' onClick={() => handleRemove(items)} />
                    <div className=" mx-5 flex items-start justify-center flex-col w-4/5 ">
                      <div className="text-xs sm:text-base my-2">{`${title.slice(0, 30)}......`}</div>
                      <div className="flex items-center justify-start   mb-2">
                        <span className="text-lg border px-3 text-black py-0 cursor-pointer" onClick={() => handleCartProductQuantity('dec', items)}>-</span>
                        <span className="text-lg border px-3 text-black py-0 ">{quantity}</span>
                        <span className="text-lg border px-3 text-black py-0 cursor-pointer" onClick={() => handleCartProductQuantity('inc', items)}>+</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-start text-xs font-semibold w-4/5">
                      <span className='text-xs mx-1'>{quantity}</span>
                      <span className='text-xs mx-1'>&#215;</span>
                      <span className='text-xs mx-1 font-bold text-purple-500'>&#8377; {quantity * price.toFixed(0,4)}</span>
                    </div>

                  </div>
                </div>
              )
            })
          }

        </div>
      {
        !cartItems.length ? '':   <>
        <div className="flex w-full items-center justify-between px-6 border py-2">
        <span className='uppercase text-xl mx-2 font-bold p-1'>subtotal:</span>
        <span className='uppercase text-xl mx-2 font-bold p-1  text-purple-700'>&#8377; {cartSubTotal.toFixed(0,4)}</span>
      </div>
      <div className="flex w-full px-5 items-center justify-center my-2">
        <button className='text-white bg-purple-700 py-2 w-4/5 uppercase font-bold cursor-pointer' onClick={()=>{
          navigate('/payment')
          setShowCart(false)
        }}>checkout</button>
      </div>
        </>
      }
      </div>
    </div>
  )
}

export default Cart
