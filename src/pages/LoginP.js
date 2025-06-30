import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginP = () => {
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();

    // clave fija de acceso
    if (clave === 'admin123') {
      const admin = { nombre: 'Super Policía', tipo: 'admin' };

      // guardar usuario en localStorage
      localStorage.setItem('usuarioPolicia', JSON.stringify(admin));

      // redirigir al panel
      navigate('/');
    } else {
      setError('Clave incorrecta');
    }
  };

  return (
    <div className="card mx-auto p-4 shadow" style={{ maxWidth: '400px' }}>
      <h3 className="text-center text-danger">Login Policía</h3>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handle}>
        <div className="mb-3">
          <label>Clave de acceso:</label>
          <input
            type="password"
            className="form-control"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger w-100">Entrar</button>
      </form>
    </div>
  );
};

export default LoginP;
