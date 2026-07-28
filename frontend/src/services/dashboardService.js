import api from "../api/api";

export const getDashboard = async () => {

    const response = await api.get("/api/dashboard");

    return response.data;
};