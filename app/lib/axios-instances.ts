import axios from 'axios';

export const instannceApiBackend = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'content-type': 'application/json' },
});

export const instanceApiAddress = axios.create({
  baseURL: 'https://api-adresse.data.gouv.fr/search/',
});
