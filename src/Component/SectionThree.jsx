import React from 'react'
import Row1Img from '../Image/1.jpg'
import Row2Img from '../Image/2.jpg'
import Row3Img from '../Image/3.jpg'
import Row4Img from '../Image/4.jpg'
import Row5Img from '../Image/5.jpg'

const SectionThree = () => {
  return (
    <div class="container">
    <section class="sectionFive">
      <div class="row d-flex justify-content-around align-items-center">
        <div class="col-md-2 col-sm-6 ms-0">
          <img src={Row1Img} alt=""/>
        </div>
        <div class="col-md-2 col-sm-6">
          <img src={Row2Img} alt=""/>
        </div>
        <div class="col-md-2 col-sm-6">
          <img src={Row3Img} alt=""/>
        </div>
        <div class="col-md-2 col-sm-6">
          <img src={Row4Img} alt=""/>
        </div>
        <div class="col-md-2 col-sm-6">
          <img src={Row5Img}alt=""/>
        </div>
      </div>
    </section>
  </div>
  )
}

export default SectionThree