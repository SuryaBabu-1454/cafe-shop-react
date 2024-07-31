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
             Our Special </h2>
             <h5 className='m-2'>Filter Coffee</h5>
            <p> Experience the rich and authentic taste of our Signature Filter Coffee. Made with a blend of premium, freshly ground beans and expertly brewed in a traditional filter, this coffee offers a smooth, full-bodied flavor with aromatic notes that invigorate your senses. Perfect for starting your day or enjoying a relaxing break, our filter coffee is a true delight for coffee lovers.






</p>
           <Link to="menu"><button className="btn btn-outline-dark">View Menu</button></Link> 
           </div>
          </div> 
    </section>
  <section className="sectionTwo">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-5  d-flex justify-content-center align-items-start flex-column Contents">
            <h2>
              Our Products</h2>
            <p>Enjoy the authentic taste of India with our premium coffee, crafted using traditional and modern methods. We use the finest Arabica and Robusta beans, brewed in our classic South Indian filter coffee maker for a rich, aromatic decoction. Combined with fresh, pure milk and your choice of spices or sweeteners, our coffee delivers an irresistible, full-bodied flavor in every cup</p>
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
              Meet our Chef</h2>          
            <p>Introducing our talented chef, who blends traditional techniques with modern flair to craft unforgettable coffee experiences. With a passion for perfecting every brew, our chef expertly selects the finest beans and uses state-of-the-art equipment to create rich, aromatic coffee that delights the senses. From our signature filter coffee to innovative new blends, every cup reflects their dedication to quality and craftsmanship.</p>
           <Link to="menu"> <button className="btn btn-outline-dark">View Menu</button></Link>
           </div>
          </div> 
    </section>
  </div>
    </>
    
  )
}

export default ThisSection