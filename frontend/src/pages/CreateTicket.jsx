import { useState } from "react";
import Navbar from "../components/Navbar";
import { createTicket } from "../services/ticketService";

function CreateTicket() {

    const [ticket, setTicket] = useState({
        title: "",
        description: "",
        category: "",
        priority: ""
    });

    const handleChange = (e) => {

        setTicket({
            ...ticket,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createTicket(ticket);

            alert("Ticket created successfully!");

            setTicket({
                title: "",
                description: "",
                category: "",
                priority: ""
            });
        }
        catch (error) {
            console.log(error);
            alert("Failed to create ticket. Please try again.");
        }
    };

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>Create Ticket</h2>

                        <form onSubmit={handleSubmit}>

                            <input
                                className="form-control mb-3"
                                placeholder="Title"
                                name="title"
                                value={ticket.title}
                                onChange={handleChange}
                            />

                            <textarea
                                className="form-control mb-3"
                                placeholder="Description"
                                name="description"
                                value={ticket.description}
                                onChange={handleChange}
                            />

                            <input
                                className="form-control mb-3"
                                placeholder="Category"
                                name="category"
                                value={ticket.category}
                                onChange={handleChange}
                            />

                            <select
                                className="form-control mb-3"
                                name="priority"
                                value={ticket.priority}
                                onChange={handleChange}
                            >
                                <option value="">Select Priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>

                            <button className="btn btn-primary" type="submit">
                                Create Ticket
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </>
    );
}

export default CreateTicket;