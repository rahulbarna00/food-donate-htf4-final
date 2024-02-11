import React from 'react'
import { useNavigate } from 'react-router-dom'
const Page = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div>
            <h1>Thank You , for Taking the order</h1>
            <button onClick={(e)=>{
                navigate('/ngo/dashboard')
            }}>Dashboard</button>
        </div>
    </div>
  )
}

export default Page