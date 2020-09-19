// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Toggle from './pages/Toggle';
import Inicio from './pages/Inicio'; // Importa la nueva página de bienvenida

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/toggle" element={<Toggle />} />
      </Routes>
    </Router>
  );
}

export default App;
