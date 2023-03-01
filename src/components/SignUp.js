import React, { useState } from "react";
import { Link } from 'react-router-dom';

import regi from '../img/regi2.png';



export const SignUp = () => {
    const[Name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[ConPassword,setConPassword]=useState("");
    const[phone,setPhoneNumber]=useState("");
    // const[age,setAge]=useState("");
    // const[Weight,setWeight]=useState("");
    const[Height,setHeight]=useState("");
    



    // store email and password
    const[allEntry, setAllEntry]=useState([]);
    const submitForm=(e)=>{
        e.preventDefault(e);
        const newEntry={email:email,password:password};
        setAllEntry([...allEntry,newEntry]);
    }
  return (
    <>
    <p className='font-bold text-2xl p-5  text-center'> Please <span className='italic text-purple-600 '>Sign Up</span> First </p>
    <section className="bg-white min-h-screen flex items-center justify-center z-40 ">
     <div className=" bg-gray-100 flex w-3/4 mt-0 rounded-2xl shadow-lg max-w-screen p-5 justify-between ">
      <div className="w-1/2 px-16  ">

     <form className="flex flex-col gap-4 " action="" onSubmit={submitForm}>
        {/* Name */}
        <label className="font-bold text-zinc-600" for="exampleInputEmail1" class="form-label">Name: </label>

        <input className=" p-5 mt-1 rounded-xl border " type="text" class="form-control" id="name"  placeholder="Your Name" value={Name}
        onChange={(e)=>setName(e.target.value)}
        />



        {/* email */}
        <label className="font-bold text-zinc-600 " for="exampleInputEmail1" class="form-label">Email: </label>
        <input className=" p-5 mt-1 rounded-xl border " type="email" class="form-control" id="email"  placeholder=" Email" value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
        />
        {/* Password */}
        <label className="font-bold text-zinc-600"  class="form-label">Password: </label>

        <input className="mx-px p-3 mt-1  rounded-xl border " type="password" class="form-control" id="password" placeholder=" Password" value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        {/*Confirm Password */}
        <label className="font-bold text-zinc-600 "  class="form-label">Confirm Password: </label>
        <input className="mx-px p-3 mt-1  rounded-xl border " type="password" class="form-control" id="Conpassword" placeholder="Confirm Password" value={ConPassword}
        onChange={(e)=>setConPassword(e.target.value)}
        />
        {/* phone number */}
        
        <label className="font-bold text-zinc-600 "  class="form-label">Phone Number: </label>
        <input className="mx-px p-3 mt-1  rounded-xl border " type="text" class="form-control" id="Phone" placeholder="Mobile Number" value={phone}
        onChange={(e)=>setPhoneNumber(e.target.value)}
        />

        {/*Age */}
{/*         
        <label className="font-bold "  class="form-label">Age: </label>
        <input className="mx-px p-3 mt-1  rounded-xl border " type="text" class="form-control" id="age" placeholder="Age" value={age}
        onChange={(e)=>setAge(e.target.value)}
        /> */}
        {/* Weight */}
        
        {/* <label className="font-bold "  class="form-label">Weight: </label>
        <input className="mx-px p-3 mt-1  rounded-xl border " type="text" class="form-control" id="Weight" placeholder="Weight" value={Weight}
        onChange={(e)=>setWeight(e.target.value)} 
        />*/}
        {/* Height */}
        
        <label className="font-bold text-zinc-600 "  class="form-label">Height: </label>
        <input className="mx-px p-3 mt-1  rounded-xl border " type="text" class="form-control" id="Height" placeholder="Height" value={Height}
        onChange={(e)=>setHeight(e.target.value)}
        />

      
      
      <button className="py-2 mt-3  rounded-xl border bg-gradient-to-r from-purple-300 to-purple-600 text-white   hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 " type="submit" >SignUp</button>
     </form>
     <p className="font-bold text-xl p-2"> Allready Have An Account ? <br/>Let's  
     <Link to="/Login"><span className="text-purple-600 italic"> Register!!</span></Link></p>
     </div>
     {/* img div */}
     <div className="sm:block hidden bg-gradient-to-r from-purple-300 to-purple-600 w-3/4  rounded-2xl">
     <div className=" rounded-2xl  mx-12 p-10 mt-28 ">
       <img className="rounded-3xl" src={regi} alt="" />
     </div>
     </div>

     </div>
     </section>



</>
  )
}