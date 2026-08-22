import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import MyTickets from "./pages/MyTickets";
import PrivateRoute from "./routes/PrivateRoute";
import AIChat from "./pages/AIChat";
import ManageTickets from "./pages/ManageTickets";
import ManageUsers from "./pages/ManageUsers";
import RoleRoute from "./routes/RoleRoute";


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
            <RoleRoute allowedRoles={["EMPLOYEE"]}>
              <CreateTicket />
            </RoleRoute>
          }
        />

        <Route
          path="/tickets/my"
          element={
            <RoleRoute allowedRoles={["EMPLOYEE"]}>
              <MyTickets />
            </RoleRoute>
          }
        />

        <Route
          path="/tickets/manage"
          element={
            <RoleRoute allowedRoles={["SUPPORT_ENGINEER", "ADMIN"]}>
              <ManageTickets />
            </RoleRoute>
          }
        />

        <Route
          path="/users/manage"
          element={
            <RoleRoute allowedRoles={["ADMIN"]}>
              <ManageUsers />
            </RoleRoute>
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