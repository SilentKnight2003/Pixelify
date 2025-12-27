import ImageCard from "./ImageCard"
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
const PhotoGallery = () => {
  return (
    <div  className='my-20 flex flex-col justify-center items-center'>
        <h3 className='text-3xl font-semibold my-14'>Photos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20"> 
           <ImageCard Title="The Women" Author="Silent_Knight" Image="https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg" Price={10} 
           Icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
           Icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}/>
           <ImageCard Title="Santa Night" Author="Silent_Knight" Image="https://images.pexels.com/photos/10642235/pexels-photo-10642235.jpeg" Price={9} 
           Icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
           Icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}/>
           <ImageCard Title="Asthetic" Author="Silent_Knight" Image="https://images.pexels.com/photos/25244465/pexels-photo-25244465.jpeg" Price={15} 
           Icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
           Icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}/>
           
        </div>
    </div>
  )
}

export default PhotoGallery