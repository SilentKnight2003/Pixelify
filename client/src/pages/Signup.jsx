import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className='mt-20 sm:mt-10  min-h-screen flex justify-center items-center w-full'>
      <div className='bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]'>
        <h1 className='text-2xl font-bold text-center mb-6'>Lets's Connect!</h1>
        <form>
          {/*For User Name */}
         <div className='mb-4'>
          <label htmlFor="username" className='block text-sm font-medium text-gray-700 mb-2'>Username</label>
          <input type="text" name="name" id="name" placeholder='Davin' className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-hidden' />
         </div>
         {/*For Email*/}
         <div className='mb-4'>
          <label htmlFor="Email" className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
          <input type="password" name="email" id="email" placeholder='Davin@gmail.com' className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-hidden' />
         </div>
         {/*For Password*/}
         <div className='mb-4'>
          <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
          <input type="password" name="password" id="password" placeholder='12345678' className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-hidden' />
         </div>
         {/* For account selection */}
          <div className='mb-4'>
          <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>Select Your Account Type</label>
          <select className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-hidden'>
            <option className='outline:none' value="buyer">Buyer</option>
            <option value="seller">Seller</option>
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

