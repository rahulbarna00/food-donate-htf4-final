import React, {useEffect, useState} from 'react'
import '../css/donation.css'
import donateGet from '../apis/donate/donationGet';
import donationAccept from '../apis/donate/donationAccept';

const DonationComp = () => {

  const [donordata, setdonordata] = useState([]);
  const [ngokaID, setngokaID] = useState("")

  useEffect(() => {
    const ngoIDFULL = localStorage.getItem('BHOJNA_ngo');
    const ngoID = JSON.parse(ngoIDFULL);
    setngokaID(ngoID.id)
    const FetchDonations = async() => {
        const response = await donateGet()
        const data = response
        setdonordata(data);
    }
    FetchDonations();
  },[])


  const handleAcceptance = async (objectID, index) => {
    let arr = [...donordata]
    arr.splice(index, 1);
    setdonordata(arr)
    try {
        const response = await donationAccept({ objectID, ngokaID})
        console.log(response)
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
    <div className="donation-list">
      {donordata.map((donation , index) => (
        <div key={index} className="donation-card">
          <h3>{donation.foodname}</h3>
          <p>{donation.description}</p>
          <p>{donation.donorname}</p>
          <button onClick={() => handleAcceptance(donation._id.$oid , index) }>Accept</button>
        </div>
      ))}
    </div>
  )
}

export default DonationComp