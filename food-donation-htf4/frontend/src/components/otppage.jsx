/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setOtp(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reqID = Cookies.randomNumber; // Access cookie value
      const response = await axios.post('http://localhost:5000/verifyOTP', {
        reqID: reqID,
        otp: otp
      });
      if (response.data.success) {
        navigate('/donor/dashboard');
      } else {
        console.error('OTP verification failed');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter OTP:</label>
        <input type="text" value={otp} onChange={handleChange} />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default OtpPage;
