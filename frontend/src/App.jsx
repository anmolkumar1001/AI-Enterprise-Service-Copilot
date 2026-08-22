import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import MyTickets from "./pages/MyTickets";
import PrivateRoute from "./routes/PrivateRoute";
import AIChat from "./pages/AIChat";
import ManageTickets from "./pages/ManageTickets";
import ManageUsers from "./pages/ManageUsers";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/tickets/create"
          element={
            <PrivateRoute>
              <CreateTicket />
            </PrivateRoute>
          }
        />

        <Route
          path="/tickets/my"
          element={
            <PrivateRoute>
              <MyTickets />
            </PrivateRoute>
          }
        />

        <Route
          path="/tickets/manage"
          element={
            <PrivateRoute>
              <ManageTickets />
            </PrivateRoute>
          }
        />

        <Route
          path="/users/manage"
          element={
            <PrivateRoute>
              <ManageUsers />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/ai"
          element={
            <PrivateRoute>
              <AIChat /> 
            </PrivateRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;