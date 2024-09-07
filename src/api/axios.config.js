import axios from 'axios';

export default axios.create({
    baseURL:'https://movies-backend-production-ae28.up.railway.app/', 
    timeout:20000,
    headers:{"Content-Type":"application/json"}
});