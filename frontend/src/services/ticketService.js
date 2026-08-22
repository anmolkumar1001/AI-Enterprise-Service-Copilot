import api from "../api/api";

export const createTicket = async (ticket) => {

    const response = await api.post("/api/tickets", ticket);

    return response.data;
};

export const getMyTickets = async () => {

    const response = await api.get("/api/tickets/my");

    return response.data;
};

export const getAllTickets = async () => {
    const response = await api.get("/api/tickets");

    return response.data;
};

export const getAssignedTickets = async () => {
    const response = await api.get("/api/tickets/assigned");

    return response.data;
};

export const assignTicket = async (id) => {
    const response = await api.put(`/api/tickets/${id}/assign`);

    return response.data;
};

export const updateTicketStatus = async (id, status) => {

    const response = await api.put(`/api/tickets/${id}/status`, null, {
        params: { status }
    });  
    
    return response.data;
};