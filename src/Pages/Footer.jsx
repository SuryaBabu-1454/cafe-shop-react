import React from 'react'
import '../index.css'

const Footer = () => {
  return (
<>
<footer className="footerOne">
      <div className="container">
        <div className="row">
  
          <div className="col-md-4 col-sm-12 pb-3 text-center">
            <h3 className="mb-5">Newsletter</h3>
            <p>Stay up to date with all the latest from CafeShop</p>
          </div>
          <div className="col-md-4 col-sm-12 pb-3 text-center ">
            <h3 className="mb-5 ">Talk to Us</h3>
            <div>
              <p>9344447833 </p>
              <p>suryababu1454@gmail.com</p>
            </div>
            <div className="mt-4" >
  
              <p>3, AGS cinema's Opposite </p>
              <p>Maduravayol, Chennai-95</p>
            </div>
            
          </div>
          <div className="col-md-4 col-sm-12 text-center">
            <h1 className="m-4"><a href="">Instagram</a></h1>
            <h1 className="m-4"><a href="">Facebook</a></h1>
            <h1 className="m-4"><a href="">Twitter</a></h1>
          </div>
        </div>
      </div>
        
      </footer>
  
    <footer className=" footerTwo d-flex justify-content-center align-items-center">
      © 2024 by Crew Spot. Powered and secured by Suryababu
    </footer>

</>
  )
}

export default Footer