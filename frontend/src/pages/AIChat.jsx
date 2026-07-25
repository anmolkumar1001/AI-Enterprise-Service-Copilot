import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/api";

function AIChat() {

    const [message, setMessage] = useState("");
    const [reply, setReply] = useState("");

    const sendMessage = async () => {

        if(!message.trim()) return;

        try {

            const response = await api.post("/ai/chat", {
                message: message
            });

            setReply(response.data.reply);
        }
        catch (error) {

            console.log(error);

            alert("AI service unavailable");
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

                            </div>
                        )}

                    </div>

                </div>

            </div>
        </>
    );
}

export default AIChat;