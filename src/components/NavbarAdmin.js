import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAdmin = ({ admin }) => {
  const cerrarSesion = () => {
    localStorage.removeItem('usuarioPolicia');
    window.location.href = '/login';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-4">
      <Link className="navbar-brand" to="/">🚨 Policía</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {admin ? (
            <>
              <li className="nav-item">
                <span className="nav-link">👮 {admin.nombre}</span>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light btn-sm" onClick={cerrarSesion}>Cerrar sesión</button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link className="btn btn-outline-light btn-sm" to="/login">Iniciar sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
