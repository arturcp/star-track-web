import axios from 'axios';

const api  = axios.create({ baseURL: 'https://star-track-api.herokuapp.com' });

export default api;
