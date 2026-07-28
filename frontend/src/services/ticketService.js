import api from "../api/api";

export const createTicket = async (ticket) => {

    const response = await api.post("/api/tickets", ticket);

    return response.data;
};

export const getMyTickets = async () => {

    const response = await api.get("/api/tickets/my");

    return response.data;
};