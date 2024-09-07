import React from "react";
import  { useState, useEffect } from 'react';
import { Navbar, NavbarContent, NavbarItem, Link, Button, NavbarBrand } from "@nextui-org/react";

import { accountService } from "@/_services/account.service"; 

import logo from '@/styles/logo_removed.png';
import './header.css';
import SignUp from "../auth/SignUp";

const NoGuestNavbar = () => {
    
    return (
        <Navbar className="navbar" isBordered maxWidth="full">
            <NavbarBrand>
               
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" >
                <NavbarItem isActive>
                    <Link style={{ color: "#f08b53" }} href="/equipe" aria-current="page">
                        Equipes
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link style={{ color: "#f08b53" }} href="/classement" aria-current="page">
                        Classement
                    </Link>
                </NavbarItem>
                <NavbarBrand>
                    <Link href="/home">
                        <img src={logo} alt="Logo" width={150} height={150} />
                    </Link>
                </NavbarBrand>
                <NavbarItem isActive>
                    <Link style={{ color: "#f08b53" }} href="/evenement" aria-current="page">
                        Résultat
                    </Link>
                </NavbarItem>
                    <NavbarItem isActive >
                    <Link style={{ color: "#f08b53" }} href="/blog" aria-current="page">
                        Blog
                    </Link>
                </NavbarItem>     
            </NavbarContent>
            <NavbarContent justify="end">
            </NavbarContent>
        </Navbar>
    );
};


// const GuestNavbar = () => {
    
//     const logout = () => {
//         accountService.logout();
//         window.location.reload();
//     }
//     return (
//         <Navbar className="navbar" isBordered maxWidth="full">
//             <NavbarBrand>

//             </NavbarBrand>
//             <NavbarContent className="hidden sm:flex gap-4" justify="center">
//                 <NavbarItem isActive>
//                     <Link style={{ color: "#f08b53" }} href="/equipe" aria-current="page">
//                         Equipes
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem isActive>
//                     <Link style={{ color: "#f08b53" }} href="/classement" aria-current="page">
//                         Classement
//                     </Link>
//                 </NavbarItem>
//                 <NavbarBrand>
//                     <Link href="/home">
//                         <img src={logo} alt="Logo" width={150} height={150} />
//                     </Link>
//                 </NavbarBrand>
//                 <NavbarItem isActive>
//                     <Link style={{ color: "#f08b53" }} href="/evenement" aria-current="page">
//                         Résultat
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem isActive >
//                     <Link style={{ color: "#f08b53" }} href="/blog" aria-current="page">
//                         Blog
//                     </Link>
//                 </NavbarItem>
//             </NavbarContent>
//             <NavbarContent justify="end">
//                 <NavbarItem>
//                     <Button onClick={logout} color="primary" variant="flat">
//                         Log out
//                     </Button>
//                 </NavbarItem>
//             </NavbarContent>
//         </Navbar>
//     );
// };


const Header = () => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // // Fonction pour vérifier l'état de connexion
    // const checkAuth = () => {
    //     if (!accountService.isLogged()) {
    //         setIsAuthenticated(true);
    //     } else {
    //         setIsAuthenticated(false);
    //     }
    // };

    // // Utiliser useEffect pour vérifier l'état de connexion au montage du composant
    // useEffect(() => {
    //     checkAuth();
    // }, []);

    return (
        <div>
            {/* {isAuthenticated ? <NoGuestNavbar /> : <GuestNavbar />} */}
            <NoGuestNavbar/>
        </div>
    );
}
export default Header;