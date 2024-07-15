import React from 'react'
import Footer from './Footer'
import SectionOne from '../Component/SectionOne'
import SectionTwo from '../Component/SectionTwo'
import SectionThree from '../Component/SectionThree'

const Home = () => {
  return (
   <>
    <section className="homePage ps-5 d-flex justify-content-start align-items-center text-white  ">
      <div className="homeContent">
        <h1 className="display-3 d-inline  pe-2"><b>Gossip Cafe</b></h1>
        <span className="display-6">-Fuel Your Day</span>

        <p>"Hit up <b>Gossip Cafe</b> for your daily fix of epic coffee, fresh Juice vibes, and killer sandwiches.It's the perfect spot to chill, chat, and charge up. Catch the buzz. Stay for the Taste."</p>

      </div>
      
    </section>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>

    <Footer/>


   </>
  )
}

export default Home