import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast"
const Signup = () => {
  const navigate = useNavigate()
  const [username,setUsername] = useState("")
   const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
     const [accountType,setAccountType] = useState("buyer")
     const handleSignup = async (e) => {
      e.preventDefault();
     
      try{
        const res = await axios.post(import.meta.env.VITE_API_URL+"/signup",{
          username,
          email,
          password,
          accountType
        })
        const {data} = res;
        if(data.success){
          setUsername("");
          setEmail("");
          setPassword("");
          setAccountType("buyer")
          toast.success(data.message)
          navigate("/")
        }
      }catch(Err) {
        toast.error(Err.response?.data?.message || "Signup failed")
      }
     }
  return (
    <div className='mt-20 sm:mt-10  min-h-screen flex justify-center items-center w-full'>
      <div className='bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]'>
        <h1 className='text-2xl font-bold text-center mb-6'>Lets's Connect!</h1>
        <form onSubmit={handleSignup}>
          {/*For User Name */}
         <div className='mb-4'>
          <label htmlFor="username" className='block text-sm font-medium text-gray-700 mb-2'>Username</label>
          <input type="text" name="username" id="username" placeholder='Davin' value={username} onChange={(e) => setUsername(e.target.value)} className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-hidden' />
         </div>
         {/*For Email*/}
         <div className='mb-4'>
          <label htmlFor="Email" className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
          <input type="email" name="email" id="email" placeholder='Davin@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-hidden' />
         </div>
         {/*For Password*/}
         <div className='mb-4'>
          <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
          <input type="password" name="password" id="password" placeholder='12345678' value={password} onChange={(e) => setPassword(e.target.value)} className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-hidden' />
         </div>
         {/* For account selection */}
          <div className='mb-4'>
          <label  className='block text-sm font-medium text-gray-700 mb-2'>Select Your Account Type</label>
          <select value={accountType}  onChange={(e) => setAccountType(e.target.value)} className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-hidden'>
            <option className='outline:none' value="buyer">Buyer</option>
            <option className='outline:none' value="seller">Seller</option>
          </select>
         </div>
          {/* Login with your account */}
          <div className='flex items-center justify-end mb-4'>
            <Link to="/login" className='text-xs text-black'>
            Log in With Your Account.
          </Link>  
          </div>
          <button type='submit' className='w-full shadow-sm rounded-md border border-slate-300 px-3 py-2 transition-all shadow-sm hover:shadow-lg text-slate-600 cursor-pointer hover:text-white hover:bg-slate-800 hover:border-slate-800'>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup

