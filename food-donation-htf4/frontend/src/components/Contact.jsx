/* eslint-disable no-unused-vars */

// CONTACT COMPONENT (contains query feature)

import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import axios from 'axios'
import '../css/home.css'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const [queryForm, setqueryForm] = useState({
    email: " ",
    comment: " "
  })
  const [msg, setMsg] = useState(false);

  const CookieofUser = Cookies.get('userCookie')
  useEffect(() => {
    const checkCookie = async () => {
      if (CookieofUser) {
        setMsg(true);
      }
    }
    checkCookie();
  });

  const handleChange = (e) => {
    setqueryForm({
      ...queryForm,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // if (!msg) {
      //   navigate('/login')
      // } else {
      const response = await axios.post('http://localhost:5000/queryStorage', {
        email: queryForm.email,
        comment: queryForm.comment
      });

      if (response.status === 200) {
        alert(response.data.message);
        setqueryForm({
          email: "",
          comment: "",
        });
      }
      // }
    } catch (error) {
      console.error("Error submitting query:", error);
      if (error.response && error.response.status === 404) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };


  return (
    <div className="contact-page">
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Have a Question in Mind?</h1>
        <h1 className="primary-heading">Let Us Help You by answering queries about this platform</h1>
        {/* Input for email */}
        <label>Email</label>
        <div className="contact-form-container">
        
          <input
            type="text"
            name="email"
            placeholder="yourmail@gmail.com"
            value={queryForm.email}
            onChange={handleChange}
          />
        </div>
        <label>Comment</label>
        {/* Input for query */}
        <div className="contact-form-container">
          <input
            type="text"
            name="comment"
            placeholder="Enter your query"
            value={queryForm.comment} // changed from "email" to "comment"
            onChange={handleChange}
          />
        </div>
        {/* Submit button */}
        <button className="secondary-button" onClick={handleSubmit}>
          Submit
        </button>

      </div>
    </div>


  );
};

export default Contact;