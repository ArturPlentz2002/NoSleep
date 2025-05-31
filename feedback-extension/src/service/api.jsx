// src/service/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // ou a URL da sua API
});

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export default api;