import api from "../api/api";

export const createTicket = async (ticket) => {

    const response = await api.post("/tickets", ticket);

    return response.data;
};

export const getMyTickets = async () => {

    const response = await api.get("/tickets/my");

    return response.data;
};