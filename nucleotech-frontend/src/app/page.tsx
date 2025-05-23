"use client"

import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Info from './pages/Info';
import Header from './Components/Header';


const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/info" element={<Info />} />
        <Route path="/patients" element={<Patients />} />
        {/* Rota para página não encontrada */}
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
