import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: { 'Content-Type': 'application/json' }
});

export const reporteService = {
  obtenerReportes: () => api.get('/reportes'),
  cambiarEstado: (id, estado) => api.put(`/reportes/${id}/estado`, { estado })
};
