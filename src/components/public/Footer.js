import React from 'react';
import './footer.css';
import Login from '@/components/auth/Login'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">About Us</h3>
                    <p className="footer-text">
                        Nous sommes un club de Basket-Ball amateur établi à Givry (71).
                    </p>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Contact</h3>
                    <p className="footer-text">
                        Email: givrywinegrowers@gmail.com
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                    <Login />
                <p>&copy; {new Date().getFullYear()} Givry Winegrowers. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
