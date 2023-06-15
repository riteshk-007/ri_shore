import { useNavigate } from "react-router-dom"


function Banner() {

    const navigate = useNavigate()
    return (
        <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-2 w-full sm:flex items-center justify-evenly">
            <span className="w-full sm:w-1/2  font-sans flex items-center justify-center flex-col">
                <h1 className="font-bold text-7xl sm:text-9xl text-white">Sales</h1>
                <p className="w-full sm:w-1/2 text-center text-white my-3 text-xs sm:text-sm sm:font-semibold tracking-wide sm:tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, accusamus ipsam. Debitis ad ducimus voluptatibus nisi inventore?</p>
                <span className="flex uppercase items-center justify-between my-4">
                    <button className="text-white mx-3 py-1 sm:py-2 px-2 sm:px-5 border-2 border-white cursor-pointer">Read More</button>
                    <button className="text-black mx-3 py-1 sm:py-2 px-2 sm:px-5 border-2 border-white/60 bg-white/80 cursor-pointer" onClick={() => navigate('/products')}>buy now</button>
                </span>
            </span>
            <span className=" w-full sm:w-1/2">
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-1_1_600x.png?v=1615965621" alt="banner" />
            </span>
        </div>
    )
}

export default Banner
