import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

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

                    <Link className="nav-link" to="/tickets/create">
                        Create Ticket
                    </Link>

                    <Link className="nav-link" to="/tickets/my">
                        My Tickets
                    </Link>

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