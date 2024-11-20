import axios from 'axios';

const apiHandler = axios.create({
  baseURL: "http://localhost:5000/api", // Замените на ваш URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiHandler;
