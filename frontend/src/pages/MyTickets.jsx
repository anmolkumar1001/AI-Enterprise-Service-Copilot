import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getMyTickets } from "../services/ticketService";

function MyTickets() {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        loadTickets();
    }, []);

    const loadTickets = async () => {

        try {
            const data = await getMyTickets();
            setTickets(data);
        }
        catch (error) {
            console.log(error);

        }
    };

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="mb-4">
                    My Tickets
                </h2>

                <table className="table table-bordered table-hover">

                    <thead className="table-dark">

                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Priority</th>
                            <th>Status</th>
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

                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </>
    );
}

export default MyTickets;