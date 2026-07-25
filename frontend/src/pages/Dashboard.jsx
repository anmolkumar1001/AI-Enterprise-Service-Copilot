import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";
import Navbar from "../components/Navbar";

function Dashboard() {

    const [stats, setStats] = useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const data = await getDashboard();

            setStats(data);

        } catch (error) {

            console.log(error);

        }

    };

    if (!stats) {

        return (
        <>
            <Navbar />
            <h3 className="text-center mt-5">Loading...</h3>
        </>
    );

    }

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="mb-4">
                    Welcome Back!
                </h2>

                <div className="row">

                    <div className="col-md-3">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h3>{stats.totalTickets}</h3>
                                <p>Total Tickets</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h3>{stats.openTickets}</h3>
                                <p>Open</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h3>{stats.inProgressTickets}</h3>
                                <p>In Progress</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-center shadow">
                            <div className="card-body">
                               <h3>{stats.resolvedTickets}</h3>
                               <p>Resolved</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
   );

}

export default Dashboard;