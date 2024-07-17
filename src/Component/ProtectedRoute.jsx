import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    //  const token = localStorage.getItem('token')
    const token = useSelector(state => state.auth.token)
    console.log('authtoken PR ',token)
     if(!token){
         return <Navigate to={'/login'} />
     }

     return <Outlet />
}

export default ProtectedRoute