import React from 'react' 
import '../index.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark  ">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/"><b>Crew Spot</b></Link>
        <ul className="navbar-nav  justify-content-center flex-grow-1 mb-2 pe-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="This-is-Us">This is us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact">Contact Us</Link>
          </li>
         
        </ul>
       
      </div>
    
      <Link to="login-page" className="nav-link">Login</Link>
      

    </div>
  </nav>
  )
}

export default Navbar