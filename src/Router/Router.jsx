import React from 'react'
import { Routes,Route } from 'react-router-dom'
// import {Home,About,Contact,Services,Admin,Worker, Farmer, Customer, Accountant,RefinedSugar,BrownSugar,Jaggery,Molasses} from "../pages";
import {Home,About,Contact,Services,RefinedSugar,BrownSugar,Jaggery,Molasses} from "../pages";
import { AuthProvider } from '../context/AuthContext';



import Registration from '../pages/Registration';
import LoginPage from '../Components/LoginPage';
import AdminPage from '../Components/AdminPage';
import AccountantPage from '../Components/AccountantPage';
import EmployeePage from '../Components/EmployeePage';
import FarmerPage from '../Components/FarmerPage';
import CustomerPage from '../Components/CustomerPage';
const Router = () => {
  return (
    <div>
      <AuthProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        
     
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/accountant" element={<AccountantPage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/farmer" element={<FarmerPage />} />
        <Route path="/customer" element={<CustomerPage />} />
      
  
        <Route path="/refinedSugar" element={<RefinedSugar/>}/>
        <Route path="brownSugar" element={<BrownSugar/>}/>
        <Route path="jaggery" element={<Jaggery/>}/>
        <Route path="molasses" element={<Molasses/>}/>

        <Route path="registration" element={<Registration/>}/>
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default Router
