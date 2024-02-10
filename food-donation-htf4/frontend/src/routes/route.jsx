/* eslint-disable no-unused-vars */
// has all the routes
import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Register from '../components/Register';
import Donor from '../components/Donor';
import Otppage from '../components/otppage';
import Location from '../components/Location'
import DonorLogin from '../components/donorLogin'
import { Dashboard } from '../components/Dashboard';
import NGOLogin from '../components/NGOlogin';
import Donation from '../components/Donation';

const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/donor',
        element: <Donor/>
    },
    {
        path: '/otp',
        element: <Otppage/>
    },
    {
        path:'location',
        element: < Location/>
    },
    {
        path: '/auth/donor/login',
        element: <DonorLogin/>
    },{
        path:'/auth/ngo/login',
        element:<NGOLogin/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/donation',
        element: <Donation/>
    }
]
export default routes;