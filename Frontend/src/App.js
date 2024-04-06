// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CustomerData from './pages/CustomerData';
import Login from './pages/Login';
import AddInvestigators from './pages/AddInvestigators';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customerdata" element={<CustomerData />} />
        <Route path="/addinvestigators" element={<AddInvestigators />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
