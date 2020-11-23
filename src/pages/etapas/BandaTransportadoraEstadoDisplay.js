// BandaTransportadoraEstadoDisplay.js
import React, { useState, useEffect } from 'react';

function BandaTransportadoraEstadoDisplay() {
  const [estado, setEstado] = useState(null);

  const consultarEstado = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/banda-transportadora/estado`);
      if (!response.ok) {
        throw new Error('Error al consultar el estado');
      }
      const data = await response.text();  // Cambio aquí: usar response.text() en lugar de response.json()
      setEstado(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(consultarEstado, 100);  // Consulta el estado cada 100 milisegundos
    return () => clearInterval(intervalId);  // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: estado === 'ENCENDIDO' ? 'green' : 'red',
    }}>
      {estado}
    </div>
  );
}

export default BandaTransportadoraEstadoDisplay;