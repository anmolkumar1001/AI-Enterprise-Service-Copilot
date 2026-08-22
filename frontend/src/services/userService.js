import api from "../api/api";

export const getAllUsers = async () => {
    const response = await api.get("/api/users");
    return response.data;
};

export const updateUserRole = async (id, role) => {
    const response = await api.put(`/api/users/${id}/role`, { role });
    return response.data;
};

