//import logo from './logo.svg';
import './App.css';
import React from 'react';
 //import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   //import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from "./Components/footer/Footer";

import { Outlet } from 'react-router-dom';
import Router from './Router/Router';

function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
