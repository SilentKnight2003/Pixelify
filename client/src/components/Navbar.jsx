import { Link } from "react-router-dom"
const Navbar = () => {  
  return (
    <nav className="bg-white flex flex-col sm:flex-row  justify-between items-start sm:items-center px-5 py-5 fixed top-0 left-0 right-0 shadow-md z-30 ">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-3xl">
          Pixelify
        </Link>
      </div>
      <ul className="flex  gap-5 text-lg text-gray-600 ml-0">
        <Link to="" className="hover:text-black cursor-pointer sm:p-2">About</Link>
        <Link to="" className="hover:text-black cursor-pointer sm:p-2">Contact</Link>
        <Link to="/login" className="hover:text-black cursor-pointer sm:p-2">Log In</Link>
        <Link to="/signup" className="hover:text-black cursor-pointer sm:p-2">Sign Up</Link>
      </ul>
    </nav>
  );
}

export default Navbar
