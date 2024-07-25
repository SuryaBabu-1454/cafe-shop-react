import React from 'react'
import '../index.css'
import ThisOne from '../Image/ThisisOne.jpeg'
import ThisTwo from '../Image/This is us 2.webp';
import DrinkNew from '../Image/DrinkNew.jpeg';
import { Link } from 'react-router-dom'
const ThisSection = () => {
  return (
    <>
     <div className="container-fluid">
  <section className=" sectionOne">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0  ContentsImg">
            <img src={DrinkNew} alt="drink" className='img-fluid p-0' />
           
          </div>
          <div className="col-md-6 col-sm-12 p-5 d-flex justify-content-center align-items-start flex-column Contents">
            <h2>
             Eat.</h2>
            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
           <Link to="menu"><button className="btn btn-outline-dark">View Menu</button></Link> 
           </div>
          </div> 
    </section>
  <section className="sectionTwo">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-5  d-flex justify-content-center align-items-start flex-column Contents">
            <h2>
              Drink.</h2>
            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <Link to="menu"> <button className="btn btn-outline-dark">View Menu</button></Link>
           </div>
            <div className="col-md-6 col-sm-12 p-0 ContentsImg ">
            <img src={ThisOne} alt="" className="img-fluid p-0"/>
          </div>
          </div> 
    </section>
  <section className=" sectionThree">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0 ContentsImg ">
            <img src={ThisTwo} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 col-sm-12 Contents d-flex justify-content-center align-items-start flex-column p-5">
            <h2>
              Enjoy.</h2>          
            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
           <Link to="menu"> <button className="btn btn-outline-dark">View Menu</button></Link>
           </div>
          </div> 
    </section>
  </div>
    </>
    
  )
}

export default ThisSection