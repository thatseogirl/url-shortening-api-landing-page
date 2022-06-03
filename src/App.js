import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import  Home from "./components/Home/Home"
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
