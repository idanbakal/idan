import React from 'react';
import Desktop from "./screens/desktop";
import Thanks from "./screens/thanks";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const AppRoutes: React.FC = () => (
 
    <Routes>
       <Route path="/" element={<Desktop />} />
       <Route path="/thanks" element={<Thanks />} />
       
   
     </Routes>
     
   );
   
   export default AppRoutes;