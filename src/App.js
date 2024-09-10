import '@/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import PublicRouter from '@/pages/Public/PublicRouter';
import AdminRouter from '@/pages/Admin/AdminRouter';
import AuthGuard from '@/_helpers/AuthGuard';

function App() {
  return (
    <NextUIProvider>
       <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PublicRouter />} /> 

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
