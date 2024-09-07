import React from 'react';

import { Routes, Route } from 'react-router-dom'

import Error from '@/_utils/Error'
import {Layout, Home, Equipe, Evenement, Classement, Blog} from '@/pages/Public'
import PreLoader from '@/components/public/PreLoader';

const PublicRouter = () => {
    return (
        <>
        <PreLoader/>   
        <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
              
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/equipe" element={<Equipe />} />
                <Route path="/evenement" element={<Evenement />} />
                <Route path="/classement" element={<Classement />} />
                <Route path="/blog" element={<Blog />} />

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
        </> 
    );
};

export default PublicRouter;