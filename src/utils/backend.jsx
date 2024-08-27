import axios from 'axios';

export const url = 'https://nextcrud-api.onrender.com/api';
export const backend = axios.create({
  baseURL: url,
});
