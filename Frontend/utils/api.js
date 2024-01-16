import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5037/api', // Replace with your API endpoint
});

export const fetchData = async () => {
  const response = await api.get('/staff');
  return response.data;
};