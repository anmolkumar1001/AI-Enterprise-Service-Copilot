import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import {
    getAllTickets,
    assignTicket,
    updateTicketStatus
} from "../services/ticketService";

function ManageTickets() {

    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTickets();
    }, []);

    const loadTickets = async () => {

        try {

            const data = await getAllTickets();

            setTickets(data);
        }
        catch (error) {

            console.log("Failed to load tickets:", error);
        }
        finally {

            setLoading(false);
        }
    };

    const handleAssign = async (id) => {

        try {

            await assignTicket(id);

            await loadTickets();
        }
        catch (error) {

            console.log("Failed to assign ticket:", error);

            alert("Failed to assign ticket.");
        }
    };

    const handleStatusChange = async (id, status) => {

        try {

            await updateTicketStatus(id, status);

            await loadTickets();
        }
        catch (error) {

            console.log("Failed to update ticket status:", error);

            alert("Failed to update ticket status.");
        }
    };

    if(loading) {

        return (
            <>
                <Navbar />

                <h3 className="text-center mt-5">
                    Loading tickets...
                </h3>
            </>
        );
    }

    return (
        <>

            <Navbar />

            <div className="container mt-5">

                <h2 className="mb-4">
                    Manage Tickets
                </h2>

                <table className="table table-bordered table-hover">

                    <thead className="table-dark">

                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Created By</th>
                            <th>Assigned To</th>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    
                    <tbody>

                        {tickets.map(ticket => (

                            <tr key={ticket.id}>

                                <td>{ticket.id}</td>
                                <td>{ticket.title}</td>
                                <td>{ticket.category}</td>
                                <td>{ticket.priority}</td>
                                <td>{ticket.status}</td>
                                <td>{ticket.createdBy}</td>

                                <td>{ticket.assignedTo || "Unassigned"}</td>

                                <td>

                                    {!ticket.assignedTo && (
                                        <button className="btn btn-primary btn-sm me-2" onClick={() => handleAssign(ticket.id)}>
                                            Assign
                                        </button>
                                    )}

                                    {ticket.status !== "RESOLVED" && (
                                        <button className="btn btn-success btn-sm" onClick={() => handleStatusChange(ticket.id, "RESOLVED")}>
                                            Resolve
                                        </button>
                                    )}

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>

        </>
    );
}

export default ManageTickets;