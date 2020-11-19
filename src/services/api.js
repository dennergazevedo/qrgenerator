import axios from 'axios';

const api = axios.create({
    baseURL:'https://vps-3922624.artcopias.com.br:1498/',
});

export default api;