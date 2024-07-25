import React from 'react'
import Row1Img from '../Image/Machine4.jpeg'
import Row2Img from '../Image/2.jpg'
import Row3Img from '../Image/Green.jpeg'
import Row4Img from '../Image/4.jpg'
import Row5Img from '../Image/Cold tea.jpeg'

const SectionThree = () => {
  return (
    <div className="container">
    <section className="sectionFive">
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-md-2 col-sm-6 ms-0">
          <img src={Row1Img} alt=""/>
        </div>
        <div className="col-md-2 col-sm-6">
          <img src={Row2Img} alt=""/>
        </div>
        <div className="col-md-2 col-sm-6">
          <img src={Row3Img} alt=""/>
        </div>
        <div className="col-md-2 col-sm-6">
          <img src={Row4Img} alt=""/>
        </div>
        <div className="col-md-2 col-sm-6">
          <img src={Row5Img}alt=""/>
        </div>
      </div>
    </section>
  </div>
  )
}

export default SectionThree