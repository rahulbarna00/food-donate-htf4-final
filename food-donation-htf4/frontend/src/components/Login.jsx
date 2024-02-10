/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import '../css/auth.css';
import {useNavigate} from 'react-router-dom'
import loginAPI from '../apis/login'
const Login = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await loginAPI({email,password})
            console.log(response)
            if(response.success){
                navigate('/donor')
            }else{
                navigate('/login')
            }
        } catch (err) {
            console.error('Error:', err.message);
        }
    };
    
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="username" value={email} onChange={(e) => setemail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;