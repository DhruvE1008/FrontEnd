import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5227/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const createOrder = async (flavorIds: number[]) => {
  try {
    const response = await apiClient.post('/orders', { flavorIds });
    return response.data;
  } catch (error) {
    throw error;
  }
};