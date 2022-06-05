import axios from "axios";

export const api = axios.create({
  // baseURL: 'http://localhost:3000/api', For use app the local machine
  baseURL: 'https://bruno-santos-dtmoney.netlify.app/',
})