import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BiSearch } from 'react-icons/bi';
import { BsSuitHeart } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { useContext } from "react"

import Cart from './Cart';
import Search from './Search';
import { ContexApp } from '../utils/Context';


function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const { loading , cartItems} = useContext(ContexApp)

  const navigate = useNavigate()
  // const {id} = useParams()

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 220) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <div className={`${scrolled ? 'ani z-50 sticky top-0 w-full bg-black flex items-center justify-center p-3' : 'w-full bg-black flex items-center justify-center p-3'}`}>
        <div className="container  flex items-center justify-evenly">
          <ul className="hidden text-white font-semibold sm:flex uppercase">
            <li className="mx-2 text-sm  cursor-pointer" onClick={() => navigate('/')}>Home</li>
            <li className="mx-2 text-sm  cursor-pointer" onClick={() => navigate('/products')}>Products</li>
            <li className="mx-2 text-sm  cursor-pointer" onClick={() => navigate(`/categoryes`)}>Categories</li>
          </ul>
          <span className="text-white font-bold text-2xl sm:text-4xl uppercase my-1 cursor-pointer" onClick={() => navigate('/')}>
            Rk_Store.
          </span>

          <span className="flex items-center justify-between text-white relative">
            <BiSearch fontSize={18} className='mx-2 cursor-pointer' onClick={() => setShowSearch(true)} />
            <BsSuitHeart fontSize={18} className='mx-2 cursor-pointer' />
            <CgShoppingCart fontSize={18} className='mx-2 cursor-pointer' onClick={() => setShowCart(true)} />
            {
              cartItems.length ==0 ?<label className='hidden'>{cartItems.length}</label>: <label className='absolute bg-purple-700 text-center cursor-pointer text-sm text-white rounded-full px-2 -right-[8px] -top-3'>{cartItems.length}</label>
            }
          </span>
        </div>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
      {loading && <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}> <LinearProgress color="secondary" className='absolute' />  </Stack>}
    </>
  )
}

export default Header
