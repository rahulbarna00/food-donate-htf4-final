/* eslint-disable no-unused-vars */
// has all the routes
import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Register from '../components/Register';
import Donor from '../components/Donor';
import Otppage from '../components/otppage';
import Location from '../components/Location'
import Login from '../components/Login'
import { Dashboard } from '../components/Dashboard';

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
        path: '/login',
        element: <Login/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    }
]
export default routes;