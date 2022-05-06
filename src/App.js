import React from 'react';
import Register from './components/Register';
import Login from "./components/Login";
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        

      </Routes>
    </div>
  );
};

export default App;