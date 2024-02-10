/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Location from './Location';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const DonationForm = () => {
  const [donationData, setDonationData] = useState({
    description: '',
    foodname: '',
    phone: '',
    donorname: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonationData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/donorformsubmission', {
            description: donationData.description,
            foodname: donationData.foodname,
            phone: donationData.phone,
            donorname: donationData.donorname
      });
    if(response.status===200){
      navigate('/dashboard');
    }
      
  };

  return (
    <form onSubmit={handleSubmit} style={{marginTop: "20px"}}>
      <h1 style={{textAlign: "center"}}>Donate Your food</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '300px',
          margin: '0 auto', // Center the form horizontally
        }}
      >
    
        <TextField
          label="Food Name"
          name="foodname"
          value={donationData.foodname}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Description"
          name="description"
          value={donationData.description}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Phone"
          name="phone"
          value={donationData.phone}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Donor Name"
          name="donorname"
          value={donationData.donorname}
          onChange={handleChange}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Location />
      </Box>
    </form>
  );
};

export default DonationForm;
