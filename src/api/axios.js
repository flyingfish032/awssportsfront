// src/api/axios.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://ec2-13-232-204-19.ap-south-1.compute.amazonaws.com:8080/api', // Change this if your backend URL is different
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;

