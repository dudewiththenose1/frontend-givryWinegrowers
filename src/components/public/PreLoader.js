import React, { useEffect } from "react";
import logo from '@/styles/logo_removed.png';
import './preloader.css';
import { preLoaderAnim } from "@/_utils/animation";

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className="preloader">
                <span className="loader"></span> {/* Assurez-vous que le spinner est suffisamment grand */}
                <img src={logo} alt="Logo" />
        </div>
    );
}

export default PreLoader;
