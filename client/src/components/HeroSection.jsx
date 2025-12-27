import { IoIosSearch } from "react-icons/io";
import PhotoGallery from "./PhotoGallery";
const HeroSection = () => {
  return (
    <div className=" sm:w-[80vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center ">
      <form action="" className="absolute flex justify-center items-center">
        <input
          type="search"
          id="search"
          name="search"
          className="-ml-3 py-5 w-[65vw] sm:w-[44vw] text-xl sm:text-3xl outline-none  border-b border-gray-300 focus:border-gray-500 transition-all duration-300"
          placeholder="Search your assest...."
          
        />
        <div className="flex justify-center items-center">
            <IoIosSearch className="text-3xl sm:text-5xl text-gray-500  -ml-10" />
        </div>
      </form>
    
    </div>
  );
};

export default HeroSection;
