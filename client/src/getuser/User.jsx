import React, { useEffect, useState } from "react";
import axios from "axios";
import "./user.css";
import toast from "react-hot-toast";

import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);
  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/user/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="userTable">
      <div className="header">
        <h2>Customer Management</h2>

        <Link to="/add" className="btn btn-add">
          Add User <i className="fa-light fa-user-plus"></i>
        </Link>
      </div>
      {users.length === 0 ? (
        <div className="noData">
          <h3>No DATA TO DISPLAY</h3>
          <p>You can add new Customers</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>
                    <span className="status new">{user.status}</span>
                  </td>

                  <td className="actions">
                    <Link to={"/update/" + user._id} className="btn-icon edit">
                      <i className="fa-thin fa-pen-to-square"></i>
                    </Link>

                    <button
                      onClick={() => deleteUser(user._id)}
                      className="btn-icon delete"
                    >
                      <i className="fa-thin fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
