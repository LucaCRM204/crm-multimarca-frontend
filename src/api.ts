// En src/api.js o similar
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Puerto del nuevo backend
  timeout: 10000,
});

// El resto de la configuración igual