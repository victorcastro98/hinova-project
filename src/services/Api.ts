// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api/ProvaConhecimentoWebApi/Api',
});

export default api;
