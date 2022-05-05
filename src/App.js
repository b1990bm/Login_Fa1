import React from 'react';
import Register from './components/Register';
import Login from "./components/Login";
import {Route,Routes} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        

      </Routes>
    </div>
  );
};

export default App;