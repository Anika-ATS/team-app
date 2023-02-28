import React from 'react';
import { Link } from 'react-router-dom';
// flex justify-between items-center
export const Navigation = () => {
  return (
    <>
    <nav className='grid grid-cols-4 items-center  bg-gray-200 space-x-40 text-purple-600'>

        <div className="py-3 w-10 ">
            <h1 className="text-5xl text-rose-500 font-bold px-5 py-2">LOGO</h1>
        </div>
     
      <ul className="flex justify-between space-x-40 p-2 col-span-3">
        <div className=' flex justify-evenly  '>
        <li className="text-lg font-medium p-2 my-5 mx-7 hover:text-rose-500 " > <Link to="/">Home </Link></li>
         <li className="text-lg font-medium p-2 my-5 mx-7 hover:text-rose-500"> <Link to="/Prediction">Prediction </Link></li>
        <li className="text-lg font-medium p-2 my-5 mx-7 hover:text-rose-500"> <Link to="/Maintanence"> Maintenance </Link></li>
        </div>

        {/* login/sign up */}
        <div className='col-span-1  flex justify'>
        <li className='text-lg font-medium p-2 my-5 mx-7 hover:text-rose-500'> <Link to="/Login">Login </Link></li>

        <li className='text-lg font-medium p-2 my-5 mx-7 hover:text-rose-500'>
          
        <Link to="/SignUp">SignUp </Link></li>
        </div>
       </ul> 

        
       </nav>
    
    </>
  )
}
