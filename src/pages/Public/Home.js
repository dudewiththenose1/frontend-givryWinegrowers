import React from 'react';

import './home.css';

import logo from '@/styles/logo_removed.png'

import Header from '@/components/public/Header';
import Footer from '@/components/public/Footer';

const Home = () => {
    return (
        <div>
            <div className="image-container">
            <div className="image">
               
                </div> 
                <div className="header">
                    <Header />
                <div className="logo">
                <img src={logo} alt="Logo"  />
                </div> 
                </div>
            
            </div>
            <Footer/>
        </div>

        
    );
};

export default Home;