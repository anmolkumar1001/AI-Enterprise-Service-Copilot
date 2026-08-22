import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllUsers, updateUserRole } from "../services/userService";

function ManageUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {

        try {

            const data = await getAllUsers();

            setUsers(data);
        }
        catch (error) {

            console.error(error);
        }
    };

    const handleRoleChange = async (id, role) => {

        try {

            await updateUserRole(id, role);

            loadUsers();
        }
        catch (error) {

            console.error(error);

            alert("Failed to update user role.");
        }
    };

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="mb-4">
                    Manage Users
                </h2>

                <table className="table table-bordered table-hover">

                    <thead className="thead-dark">

                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Update Role</th>
                        </tr>

                    </thead>

                    <tbody>

                        {users.map(user => (

                            <tr key={user.id}>

                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>

                                    <select
                                        className="form-select"
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                    >

                                        <option value="EMPLOYEE">EMPLOYEE</option>
                                        <option value="SUPPORT_ENGINEER">SUPPORT_ENGINEER</option>
                                        <option value="ADMIN">ADMIN</option>

                                    </select>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
        </>
    );
}

export default ManageUsers;