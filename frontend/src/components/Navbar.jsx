import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    let role = null;

    if(token) {
        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            role = payload.role;
        }
        catch (error) {
            console.error("Error parsing token:", error);
        }
    }

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        navigate("/");

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/dashboard">
                    Enterprise AI Service Copilot
                </Link>

                <div className="navbar-nav">

                    <Link className="nav-link" to="/dashboard">
                        Dashboard
                    </Link>

                   {role === "EMPLOYEE" && (
                        <>
                            <Link className="nav-link" to="/tickets/create">
                                Create Ticket
                            </Link>

                            <Link className="nav-link" to="/tickets/my">
                                My Tickets
                            </Link>
                        </>
                    )}

                    {(role === "SUPPORT_ENGINEER" || role === "ADMIN") && (
                        <Link className="nav-link" to="/tickets/manage">
                            Manage Tickets
                        </Link>
                    )}

                    {role === "ADMIN" && (
                        <Link className="nav-link" to="/users/manage">
                            Manage Users
                        </Link>
                    )}

                    <Link className="nav-link" to="/ai">
                        AI Assistant
                    </Link>

                    <button
                        className="btn btn-danger ms-3"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;