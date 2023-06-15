import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
function Newsletter() {
  return (
    <div className="w-full flex items-center justify-center flex-col p-2 bg-gradient-to-l to-fuchsia-600/70 from-violet-600/80">
          <p className="uppercase text-sm my-2 text-white/70">newsletter</p>
          <p className="uppercase my-2 text-black text-center text-2xl font-semibold">sign up latest updates and offers</p>
          <span className=" flex items-center justify-center flex-wrap">
            <input type="text" className="outline-none border-none text-sm px-2 py-2 w-64" placeholder="Email Address"/>
            <button className="bg-blue-700 text-white py-2 px-3 my-2 sm:mx-2 cursor-pointer ">Subscribe</button>
          </span>
          <p className="my-2 text-black/80 text-xs font-semibold text-center">Will be used in accordance with our Privacy Policy</p>
          <span className="flex items-center justify-center text-white my-4">
              <span className="bg-black/60 rounded-full py-2 px-2 mx-2 cursor-pointer"> <FaFacebookF /></span>
              <span className="bg-black/60 rounded-full py-2 px-2 mx-2 cursor-pointer"> <FaTwitter /></span>
              <span className="bg-black/60 rounded-full py-2 px-2 mx-2 cursor-pointer"> <FaInstagram /></span>
              <span className="bg-black/60 rounded-full py-2 px-2 mx-2 cursor-pointer"> <FaLinkedinIn /></span>
          </span>
    </div>
  )
}

export default Newsletter
