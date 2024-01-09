import axios from "axios";

// Create a server at the baseURL
export default axios.create({
    baseURL: 'http://localhost:3500'
});