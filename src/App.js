import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginP from './pages/LoginP';
import PanelPolicia from './pages/PanelPolicia';
import NavbarAdmin from './components/NavbarAdmin';

const App = () => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('usuarioPolicia');
    if (stored) setAdmin(JSON.parse(stored));
  }, []);

  return (
    <Router>
      <NavbarAdmin admin={admin} />
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<LoginP />} />
          <Route path="/" element={admin ? <PanelPolicia /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
