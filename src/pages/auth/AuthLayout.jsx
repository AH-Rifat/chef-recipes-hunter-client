import React from 'react';
import Header from '../../shared/Header';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default AuthLayout;