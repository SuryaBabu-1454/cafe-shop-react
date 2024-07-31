import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        message:""
    })
    const handleChange =(e)=>{
        const {name,value}= e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Data Submitted Successfully",formData);
        console.log("Data Submitted Successfully",formData);;
        navigate("/")
        
    }
  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit} >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
            <div className="row">
           <div className=" col-6 mb-3">
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <input type="text" required className="form-control" id="firstName" name='firstName' placeholder="Enter First Name" value={formData.firstName} onChange={handleChange}/>
           </div>
          <div className=" col-6 mb-3">
              <label htmlFor="lastName" className="form-label">Last Name:</label>
              <input type="text" className="form-control" required id="lastName" name='lastName' placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange}/>
          </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" required id="email" name='email' placeholder="email@gmail.com" value={formData.email} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea className="form-control" id="message" name='message'required rows="3" value={formData.message} onChange={handleChange} ></textarea>
                </div>
            <div className=" d-grid">
                <button type="submit" className="btn btn-dark btn-block">Submit</button>
            </div>
             
          </div>
         <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row">
            
          </div>
               
          
        </div>
        </div>
       
        </form>
      </div>
    </>
  );
};

export default ContactSection;
