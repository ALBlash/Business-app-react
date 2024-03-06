import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import { getUsers, updateUser } from "../services/usersApiService";
import PageHeader from "../../components/PageHeader";

const CRM = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleToggleIsBusiness = async (userId) => {
        try {
            const userToUpdate = users.find((user) => user._id === userId);
            userToUpdate.isBusiness = !userToUpdate.isBusiness;
            await updateUser(userId, userToUpdate);
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user._id === userId ? { ...user, isBusiness: userToUpdate.isBusiness } : user
                )
            );
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div>
            <PageHeader title="Welcome to the CRM page" />
            {" "}
            <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell>Full Name</TableCell>
                            <TableCell>isAdmin</TableCell>
                            <TableCell>isBusiness</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user._id}>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>
                                    {user.name.first} {user.name.last}
                                </TableCell>
                                <TableCell>{user.isAdmin.toString()}</TableCell>
                                <TableCell>{user.isBusiness.toString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CRM;
