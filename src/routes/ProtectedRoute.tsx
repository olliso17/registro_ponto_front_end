import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../components/hooks/useAuth';

const ProtectedRoute: React.FC = () => {
    const { checkLoginStatus } = useAuth();

    return checkLoginStatus() ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
