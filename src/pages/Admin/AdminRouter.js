import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { ALayout, Dashboard } from '@/pages/Admin'
import { Joueur, JEdit, JAdd } from '@/pages/Admin/Joueur'
import { Evenement, EEdit, EAdd } from '@/pages/Admin/Evenement'
import { Blog, BEdit, BAdd } from '@/pages/Admin/Blog'
import { Equipe, EqEdit, EqAdd } from '@/pages/Admin/Equipe'

import Error from '@/_utils/Error'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />} >
                <Route index element={<Dashboard/>}/>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="joueur">
                    <Route path="index" element={<Joueur />} />
                    <Route path="edit/:jid" element={<JEdit />} />
                    <Route path="add" element={<JAdd />} />
                </Route>
                <Route path="evenement">
                    <Route path="index" element={<Evenement />} />
                    <Route path="edit/:eid" element={<EEdit />} />
                    <Route path="add" element={<EAdd />} />
                </Route>
                <Route path="blog">
                    <Route path="index" element={<Blog />} />
                    <Route path="edit/:bid" element={<BEdit />} />
                    <Route path="add" element={<BAdd />} />
                </Route>
                <Route path="equipe">
                    <Route path="index" element={<Equipe />} />
                    <Route path="edit/:eqid" element={<EqEdit />} />
                    <Route path="add" element={<EqAdd />} />
                </Route>
                <Route path="*" element={<Error/>}/>
                </Route>
        </Routes>

    );
};

export default AdminRouter;