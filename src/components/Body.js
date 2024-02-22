import React from 'react';
import Sidebar from './Sidebar';
import Maincontainer from './Maincontainer';
import WatchPage from './WatchPage';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div className='flex'>
           <Sidebar></Sidebar> 
           <Outlet></Outlet>
        </div>
    );
};

export default Body;