import React, { useEffect, useState } from 'react';
import { reporteService } from '../services/api';
import ReporteCard from '../components/ReporteCard';

const PanelPolicia = () => {
  const [reportes, setReportes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    cargarReportes();
  }, []);

  const cargarReportes = () => {
    setLoading(true);
    reporteService.obtenerReportes()
      .then(res => {
        console.log('📦 Reportes cargados:', res.data);
        setReportes(res.data);
      })
      .catch(err => {
        console.error('❌ Error cargando reportes:', err);
        setError('No se pudieron cargar los reportes');
      })
      .finally(() => setLoading(false));
  };

  const cambiarEstado = async (id, estado) => {
    try {
      await reporteService.cambiarEstado(id, estado);
      cargarReportes();
    } catch (err) {
      console.error('❌ Error actualizando estado:', err);
      alert('Error al actualizar estado');
    }
  };

  return (
    <div>
      <h2 className="text-danger mb-4">Gestión de Reportes</h2>

      {loading && <p className="text-muted">Cargando reportes...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && reportes.length === 0 && (
        <div className="alert alert-warning">No hay reportes para mostrar</div>
      )}

      <div className="row">
        {reportes.map((r) => (
          <div className="col-md-6" key={r.id}>
            <ReporteCard reporte={r} onCambiarEstado={cambiarEstado} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelPolicia;
