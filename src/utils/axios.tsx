import axios from 'axios';

const myaxios = axios.create({
  baseURL: "http://localhost:4000/api/v1" // Corrected baseURL
});

export default myaxios;
