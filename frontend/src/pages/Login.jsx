import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSumit = async (e) => {

        e.preventDefault();

        try {

            const response = await login(formData);

            localStorage.setItem("token", response.token);

            navigate("/dashboard");
        }
        catch (err) {

            setError("Invalid email or password");
        }
    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h3 className="text-center mb-4">
                                Enterprise AI Service Copilot
                            </h3>

                            {error && 
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            }

                            <form onSubmit={handleSumit}>

                                <input
                                    className="form-control mb-3"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                />

                                <input
                                    className="form-control mb-3"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleChange}                                
                                />

                                <button
                                    className="btn btn-primary w-100">
                                    
                                    Login

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;