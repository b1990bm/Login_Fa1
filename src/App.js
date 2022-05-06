import React from 'react';
import Register from './components/Register';
import Login from "./components/Login";
import {Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Products from "./components/Products";
const App = () => {
  return (
    <div>
       <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;