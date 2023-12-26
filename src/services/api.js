// services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Reemplaza esto con la URL de tu API

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Agrega cualquier encabezado adicional que necesites (por ejemplo, Authorization para JWT).
  },
});

export const getVehicles = () => api.get('/vehicles');
export const createVehicle = (vehicleData) => api.post('/vehicles', vehicleData);
export const updateVehicle = (vehicleId, vehicleData) => api.put(`/vehicles/${vehicleId}`, vehicleData);
export const deleteVehicle = (vehicleId) => api.delete(`/vehicles/${vehicleId}`);

export default {
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
