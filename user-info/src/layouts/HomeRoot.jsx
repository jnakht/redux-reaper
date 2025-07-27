import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeRoot = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeRoot;