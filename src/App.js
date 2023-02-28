import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { Home } from "./components/Home";
import {Prediction} from "./components/Prediction";
import { Maintanence } from "./components/Maintanence";
import { Login } from "./components/Login";
import {SignUp} from "./components/SignUp";

import './App.css';
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Router>
       <Navigation/>
      <main>
      <Routes>
          <Route path="/" element={<Home/>} />

          
          <Route path="/Prediction" element={<Prediction/>} />
         

          <Route path="/Maintanence" element={<Maintanence/> } /> 
          <Route path="/Login" element={<Login/> } /> 
          <Route path="/SignUp" element={<SignUp/> } /> 
          
        </Routes>
      </main>
    </Router>  
    </>
  );
}

export default App;

















// import {BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
// import './App.css';
// import LoginForm from './pages/login';

// function App() {
//   return (
    
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>
//         </li>

//         <li className="nav-item">
//           <a className="nav-link" activeclassName="active" href="/">Login</a>
//         </li>
       
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

// <div><LoginForm/></div>
//     </>
//   );
// }

// export default App;
