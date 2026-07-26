import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/api";
import { createTicket } from "../services/ticketService";

function AIChat() {

    const [message, setMessage] = useState("");
    const [reply, setReply] = useState("");
    const [showCreateTicketButton, setShowCreateTicketButton] = useState(false);

    const sendMessage = async () => {

        if(!message.trim()) return;

        try {

            const response = await api.post("/ai/chat", {
                message: message
            });

            setReply(response.data.reply);
            setShowCreateTicketButton(response.data.createTicket);
        }
        catch (error) {

            console.log(error);

            alert("AI service unavailable");
        }
    };

    const handleCreateTicket = async () => {

        try {

            await createTicket({

                title: "AI Generate Ticket",

                description: message,

                category: "AI",

                priority: "MEDIUM"
            });

            alert("Ticket Created Successfully!");

            setShowCreateTicketButton(false);
        }
        catch (error) {

            console.log(error);

            alert("Unable to create ticket.");
        }
    };

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>🤖 Enterprise AI Assistant</h2>

                        <textarea 
                            className="form-control mt-3"
                            rows="5"
                            placeholder="Describe your issue..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <button
                            className="btn btn-primary mt-3"
                            onClick={sendMessage}
                        >
                            Ask AI
                        </button>

                        {reply && (

                            <div className="alert alert-success mt-4">

                                <strong>AI Response:</strong>

                                <br />

                                {reply}

                                {showCreateTicketButton && (
                                    
                                    <div className="mt-3">

                                        <button
                                            className="btn btn-warning"
                                            onClick={handleCreateTicket} 
                                        >  
                                            Create Ticket Automatically
                                        </button>

                                    </div>
                                )}

                            </div>
                        )}

                    </div>

                </div>

            </div>
        </>
    );
}

export default AIChat;