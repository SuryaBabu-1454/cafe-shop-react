import React from 'react' 
import "../index.css"
import ContactSection from '../Component/ContactSection'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <section className="sectionHead d-flex justify-content-center flex-column align-items-center">
    <h1>Let's Connect</h1>    
    <p>We're big believers in the power of a good meal and a friendly place to eat it. </p>
        <p>Stop by for fresh, locally sourced food, served with a warm smile.</p>

  </section>
  <ContactSection />
  <Footer/>
    </>
  )
}

export default Contact