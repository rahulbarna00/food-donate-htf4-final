/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import '../css/donation.css'
// array of objects
const Donation = () => {

  const [donordata, setdonordata] = useState([]);
  const ngoIDFULL = localStorage.getItem('BHOJNA_ngo');

  const ngoID = JSON.parse(ngoIDFULL);

  const ngokaID = ngoID.id;

  useEffect(() => {
    const FetchDonations = async() => {
        const response = await fetch('http://localhost:5000/donationsGet');
        const data = await response.json();
        setdonordata(data);
    }
    FetchDonations();
  })


  const handleAcceptance = async (objectID, ngoID) => {
    try {
        const response = await fetch('http://localhost:5000/ngoIDupdate', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ objectID, ngokaID })
        });

        const responseData = await response.json();
        
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
    <div className="donation-list">
      {donordata.map((donation) => (
        <div key={donation._id + donation.donorname} className="donation-card">
          <h3>{donation.foodname}</h3>
          <p>{donation.description}</p>
          <p>{donation.donorname}</p>
          <button onClick={() => handleAcceptance(donation._id.$oid)}>Accept</button>
        </div>
      ))}
    </div>
  )
}

export default Donation