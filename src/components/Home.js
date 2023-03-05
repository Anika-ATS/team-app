import React from 'react';
// import D1 from '../img/D1.jpg';
import k1 from '../img/k1.png';
import D2 from '../img/D2.jpg';
import D3 from '../img/D3.jpg';
import D4 from '../img/D4.jpg';

import Card1 from '../img/Card1.jpg';

export const Home = () => {
  return (
    <>
    {/* img div section */}
    <section >
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src={k1} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img  src={D2} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={D3} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={D4} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</section>
{/*end img div section */}

{/* about section */}
<div className="card  bg-gradient-to-r from-purple-300 to-purple-600 ">
  <div className="card-body">
    <h2 className="card-title text-center">About</h2>
    <p>Glycemicist:is a web based app that aims to predict the probability of diabetes   risk  in an individual</p>
    {/* <div className="card-actions justify-end">
      {/* <button className="btn">Buy Now</button> 
    </div> */}
  </div>
</div>
{/* <p>Glycemicist:
  is a web based app that aims to predict the probability of diabetes risk in an individual
</p>
<p>
  An authorised user can keep track of glucse level,blood pressure,weight,and BMI through thr report generated from their record.
</p> */}

{/*description card system*/}
<section className='mt-2 min-h-screen'>
  <div>
  <div className="card w-96 glass">
  <figure><img src="Card1" alt=" "/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
  </div>
</section>

    
    
    
    </>
  )
}
