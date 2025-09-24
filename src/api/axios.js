// src/api/axios.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://ec2-3-110-105-91.ap-south-1.compute.amazonaws.com:8080/api', // Change this if your backend URL is different
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;

