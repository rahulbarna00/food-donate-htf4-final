/* eslint-disable no-unused-vars */

// SIGNUP COMPONENT

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import '../css/auth.css'
// import toast from 'react-hot-toast';

const SignUp = () => {
  const navigate = useNavigate();
  const [regForm, setregForm] = useState({
    email: "",
    password: "",
    phone: "",
    fullname: ""
  })


  function handleChange(e) {
    setregForm({
      ...regForm,
      [e.target.name]: e.target.value

    })
  }


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/registerUser', {
            email: regForm.email,
            password: regForm.password,
            phone: regForm.phone,
            fullname: regForm.fullname
      });

      Cookies.set('RegisteredUser', response.data.data.id);
      navigate('/otp');

    } catch (error) {
      console.error(error.response.data);
    }
  }





  return (
    // signup page frontend
    <div className="signupform">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={regForm.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={regForm.password} onChange={handleChange} required  />

        <label>Phone:</label>
        <input type="number" name="phone" value={regForm.phone} onChange={handleChange} required/>

        <label>Full Name:</label>
        <input type="text" name="fullname" value={regForm.fullname} onChange={handleChange} required />

        <button type="submit">Sign Up</button>
      </form>
      <h6>Already have an account? <a href="/login">Login</a></h6>
    </div>
  )
}

export default SignUp;