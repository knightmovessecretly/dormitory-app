import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // change to your backend
});

// Example endpoints
export const getRooms = () => api.get("/rooms");
export const getUsers = () => api.get("/users");
export const getDormProfile = () => api.get("/dorm");
export const registerUser = (data) => api.post("/auth/register", data);

export default api;