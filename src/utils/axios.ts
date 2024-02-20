import axios from 'axios';

const myaxios = axios.create({
  baseURL: `https://portfolio-backend-8b78.onrender.com/api/v1` || "http://localhost:4000/api/v1" // Corrected baseURL
});

export default myaxios;
