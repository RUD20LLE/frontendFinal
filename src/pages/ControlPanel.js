// src/pages/ControlPanel.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Controles from './Controles';
import Etapas from './Etapas';

function ControlPanel() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasPassedLogin = sessionStorage.getItem('hasPassedLogin');
    if (hasPassedLogin !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', height: '100vh' }}>
      <Controles />
      <Etapas />
    </div>
  );
}

export default ControlPanel;