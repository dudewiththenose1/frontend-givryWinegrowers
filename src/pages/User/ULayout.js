import React from 'react';
import { Outlet } from 'react-router-dom';

import './user.css'

import Header from '@/components/admin/Header' 

const ALayout = () => {
    return (
        <div className="ALayout">
            <Header />
            <div id="admin">
                <div id="admin_body"><Outlet/></div>
            </div>
            
        </div>
    );
};

export default ALayout;