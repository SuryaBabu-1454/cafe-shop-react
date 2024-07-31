import React from 'react'
import '../index.css'
import EatImage from '../Image/toast.jpg'
import DrinkImg from '../Image/drink.jpg'
import EnjoyImg from '../Image/Enjoyy.jpeg'
import { Link } from 'react-router-dom'
const SectionOne = () => {
  return (
    <>
     <div className="container-fluid">
  <section className=" sectionOne">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0  ContentsImg">
            <img src={EatImage} alt="drink" className='img-fluid p-0' />
           
          </div>
          <div className="col-md-6 col-sm-12 p-5 d-flex justify-content-center align-items-start flex-column Contents">
            <h3>
            Savor the Flavors</h3>
            <p>Indulge in our mouthwatering selection of sandwiches, desserts, and more. Each dish is crafted with care using the freshest ingredients, offering a delightful array of flavors and textures. From hearty, gourmet sandwiches to delectable, freshly baked desserts, every bite is a delicious journey. Come and experience the perfect pairing with our premium coffee, making each visit a treat for your taste buds.</p>
           <Link to="menu"><button className="btn btn-outline-dark">View Menu</button></Link> 
           </div>
          </div> 
    </section>
  <section className="sectionTwo">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-5  d-flex justify-content-center align-items-start flex-column Contents">
            <h2>
            Sip and Savor</h2>
            <p>Refresh and delight your senses with our diverse range of beverages. From our rich, aromatic coffees brewed to perfection to invigorating fresh juices and specialty drinks, each sip promises a burst of flavor and satisfaction. Whether you're craving a classic espresso, a smooth cold brew, or a revitalizing fruit juice, our expertly crafted drinks are designed to complement every moment</p>
            <Link to="menu"> <button className="btn btn-outline-dark">View Menu</button></Link>
           </div>
            <div className="col-md-6 col-sm-12 p-0 ContentsImg ">
            <img src={DrinkImg} alt="" className="img-fluid p-0"/>
          </div>
          </div> 
    </section>
  <section className=" sectionThree">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0 ContentsImg ">
            <img src={EnjoyImg} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 col-sm-12 Contents d-flex justify-content-center align-items-start flex-column p-5">
            <h2>
              Enjoy Together</h2>          
            <p>Create memorable moments with friends, family, and loved ones at our cozy cafe. Whether you're sharing a delicious meal, sipping on expertly crafted coffee, or simply enjoying each other's company, our welcoming atmosphere and exceptional offerings make every visit special. Celebrate the joy of good food and great company as you relax and connect in a space designed for enjoyment and togetherness.</p>
           <Link to="menu"> <button className="btn btn-outline-dark">View Menu</button></Link>
           </div>
          </div> 
    </section>
  </div>
    </>
    
  )
}

export default SectionOne