import axios from "axios";

export const instannceApiBackend = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {'X-Custom-Header': 'foobar'}
});

export const instannceApiAddress = axios.create({
    baseURL: 'https://api-adresse.data.gouv.fr/search/?q=',
    headers: {'X-Custom-Header': 'foobar'}
});
