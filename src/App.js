import '@/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import PublicRouter from '@/pages/Public/PublicRouter';
import AdminRouter from '@/pages/Admin/AdminRouter';
import ULayout from '@/pages/User/ULayout';
import AuthGuard from '@/_helpers/AuthGuard';
import UserAuthGuard from '@/_helpers/UserAuthGuard';

function App() {
  return (
    <NextUIProvider>
       <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PublicRouter />} /> 
            <Route path="/user" element={
              <UserAuthGuard>
                <ULayout />
              </UserAuthGuard>
            }/>
            <Route path="/admin/*" element={
              <AuthGuard>
                <AdminRouter />
              </AuthGuard>
            } /> 
            </Routes>
        
      </BrowserRouter>
    </div>
    </NextUIProvider>
  );
}

export default App;
