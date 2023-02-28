import React, { useState } from "react";
import { Link } from 'react-router-dom';

import imgp from '../img/login.png';

export const Login = () => {
  const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    //store email and password
    const[allEntry, setAllEntry]=useState([]);
    const submitForm=(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password};
        setAllEntry([...allEntry,newEntry]);
    }
  return (
    <>
    <section className="bg-gray-50 min-h-screen flex items-center justify-center z-40 ">
     <div className=" bg-gray-100 flex w-3/4 mt-0 rounded-2xl shadow-lg max-w-screen p-5 justify-between ">
      <div className="w-1/2 px-16  ">
        <h2 className="font-bold text-2xl p-5 text-red-700 text-center"><span className="italic ">Login Here</span></h2>

       <form className="flex flex-col gap-4" action="" onSubmit={submitForm}>

      {/* <div> */}

        <label className="font-bold " for="exampleInputEmail1" class="form-label">Email: </label>
        <input className=" p-5 mt-1 rounded-xl border " type="email" class="form-control" id="email"  placeholder=" Email" value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
        />
        
        <label className="font-bold " for="exampleInputPassword1" class="form-label">Password: </label>
        <input className="mx-px p-3 mt-1  rounded-xl border " type="password" class="form-control" id="password" placeholder=" Password" value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
      
      {/* button */}
      <button className="py-2 mt-3  rounded-xl border bg-purple-600 text-white   hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 " type="submit" >Login</button>
     </form>
     <p className="font-bold text-xl p-2">Haven't Any Account ? <br/>Please <Link to="/SignUp"><span className="text-red-700 italic">Sign Up</span></Link> Here.</p>
     </div>
     {/* img div */}
     <div className="sm:block hidden bg-purple-600 w-1/2 rounded-2xl">
     <div className=" rounded-2xl  mx-12 p-10 mt-5 hover:shadow-lg">
       <img className="rounded-3xl  " src={imgp} alt="" />
     </div>
     </div>

     </div>
     </section>



</>
  )
}
