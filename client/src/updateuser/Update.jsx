import React, { useEffect, useState } from "react";
import "./update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Update = () => {
  const users = {
    name: "",
    email: "",
    phone: "",
    address: "",
    status: "New",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const { id } = useParams();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8000/api/update/user/${id}`,
        user
      );

      toast.success(response.data.message, {
        position: "top-right",
      });

      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="addUser">
      <h3>UPDATE USER</h3>

      <Link to="/">
        <i className="fa-solid fa-backward"></i> Back
      </Link>

      <form onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your address"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={user.status}
            onChange={inputHandler}
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Update;
