import { Navigate } from "react-router-dom";

const RoleRoute = ({ children, allowedRoles }) => {

    const token = localStorage.getItem("token");

    if(!token) {
        return <Navigate to="/" />;
    }

    try {

        // Split JWT into [header, payload, signature], take payload,
        // Base64-decode it, then parse it into a JS object.
        const payload = JSON.parse(atob(token.split(".")[1]));

        const role = payload.role;

        return allowedRoles.includes(role)
            ? children
            : <Navigate to="/dashboard" />;
    }
    catch (error) {

        return <Navigate to="/" />;

    }
};

export default RoleRoute;