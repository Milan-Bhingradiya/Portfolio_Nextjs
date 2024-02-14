import axios from 'axios';

const myaxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1` || "http://localhost:4000/api/v1" // Corrected baseURL
});

export default myaxios;
