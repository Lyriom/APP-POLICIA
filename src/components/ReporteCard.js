import React from 'react';

const ReporteCard = ({ reporte, onCambiarEstado }) => {
  const { id, descripcion, estado, categoria, latitud, longitud, fecha } = reporte;

  const badgeColor = estado === 'pendiente'
    ? 'warning'
    : estado === 'en_proceso'
    ? 'info'
    : 'success';

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">#{id} - {categoria?.tiposuceso || 'Sin categoría'}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="text-muted">📍 {Number(latitud).toFixed(4)}, {Number(longitud).toFixed(4)}</p>
        <p><strong>Fecha:</strong> {new Date(fecha).toLocaleString()}</p>
        <span className={`badge bg-${badgeColor} mb-3`}>{estado}</span>
        <div>
          <button className="btn btn-outline-info btn-sm me-2" onClick={() => onCambiarEstado(id, 'en_proceso')}>En Proceso</button>
          <button className="btn btn-outline-success btn-sm" onClick={() => onCambiarEstado(id, 'resuelto')}>Resuelto</button>
        </div>
      </div>
    </div>
  );
};

export default ReporteCard;
