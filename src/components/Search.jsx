import { useContext, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { ContexApp } from '../utils/Context';
import { useNavigate } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
function Search({ setShowSearch }) {
  const { products } = useContext(ContexApp)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const keys = ['title', 'description']
  const Search = () => {
    return products.filter((items) => keys.some(key=>items[key].toLowerCase().includes(query)))
  }

  const handleSearch = (id) => {
    setShowSearch(false)
    navigate(`/product/${id}`)
  }
  return (
    <>
      <div className="w-screen  flex items-center justify-center flex-col fixed h-screen top-0 bg-white z-[100] left-0 topani overflow-hidden">
        <div className="flex items-center justify-center absolute top-0 w-full border-b-2 p-3">
          <input type="text"
            autoFocus
            placeholder="Search for products"
            className='w-11/12 h-16 sm:h-20 text-center sm:text-4xl uppercase border-none outline-none font-semibold placeholder:text-gray-500'
            onChange={(e) => setQuery(e.target.value)}
          />
          <MdClose onClick={() => setShowSearch(false)} className='cursor-pointer text-2xl sm:text-5xl' />
        </div>
        <div className="container h-full flex items-center justify-start flex-col overflow-y-auto absolute sm:top-[105px] top-[90px]">
          {/* products items  */}

          {
            query.length <= 1 ? "start typing to to see products you are looking for." :
            Search().map((item) => {
              const { image, title, description, id } = item

              return (
                <div key={id} className='container mx-auto flex items-center justify-center flex-col'>
                  <div className="flex items-center justify-center sm:w-3/4 border-b p-2 cursor-pointer hover:bg-gray-100" key={item.id} onClick={() => handleSearch(id)}>
                    <img src={image} alt="" className='h-20 bg-gray-100' />
                    <div className="flex sm:w-11/12 items-start mx-3 justify-between h-full flex-col">
                      <span className='uppercase text-black font-semibold text-[10px] sm:text-sm my-2'> {title}</span>
                      <span className='text-gray-500 text-[8px] sm:text-sm'> {description}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default Search
