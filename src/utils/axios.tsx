import 'dotenv/config';
import axios from 'axios';

const myaxios = axios.create({
  baseURL: ` ${process.env.BASE_URL}|| http://localhost:4000/api/v1` // Corrected baseURL
});

export default myaxios;
