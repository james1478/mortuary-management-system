// src/pages/AccountSettings.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { updateAdminRoute, deleteAdminRoute } from '../utils/APIroutes';  // Ensure these are defined

const AccountSettings = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [formData, setFormData] = useState({
    _id: '',       // Include _id here
    username: '',
    email: '',
    password: ''   // new password; if empty, password is not changed
  });

  useEffect(() => {
    const storedAdmin = localStorage.getItem('admin');
    if (storedAdmin) {
      const parsedAdmin = JSON.parse(storedAdmin);
      setAdmin(parsedAdmin);
      setFormData({
        _id: parsedAdmin._id,           // Set _id from stored admin
        username: parsedAdmin.username || '',
        email: parsedAdmin.email || '',
        password: ''  // Leave blank by default
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(updateAdminRoute, formData);
      if (response.data.status) {
        toast.success("Account updated successfully!", {
          position: "bottom-left",
          autoClose: 7000,
          theme: "dark",
          draggable: true,
          pauseOnHover: true,
        });
        // Update localStorage and state with new admin details
        localStorage.setItem("admin", JSON.stringify(response.data.admin));
        setAdmin(response.data.admin);
        setTimeout(() => {
            navigate('/');
          }, 1500);
      } else {
        toast.error(response.data.msg || "Update failed", {
          position: "bottom-left",
          autoClose: 7000,
          theme: "dark",
          draggable: true,
          pauseOnHover: true,
        });
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update account", {
        position: "bottom-left",
        autoClose: 7000,
        theme: "dark",
        draggable: true,
        pauseOnHover: true,
      });
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        const response = await axios.delete(deleteAdminRoute, { data: { _id: formData._id } });
        if (response.data.status) {
          toast.success("Account deleted successfully", {
            position: "bottom-left",
            autoClose: 7000,
            theme: "dark",
            draggable: true,
            pauseOnHover: true,
          });
          localStorage.removeItem("admin");
          navigate('/');
        } else {
          toast.error(response.data.msg || "Deletion failed", {
            position: "bottom-left",
            autoClose: 7000,
            theme: "dark",
            draggable: true,
            pauseOnHover: true,
          });
        }
      } catch (error) {
        console.error("Deletion error:", error);
        toast.error("Failed to delete account", {
          position: "bottom-left",
          autoClose: 7000,
          theme: "dark",
          draggable: true,
          pauseOnHover: true,
        });
      }
    }
  };

  return (
    <SettingsContainer>
      <ToastContainer />
      <h2>Account Settings</h2>
      {admin ? (
        <Form onSubmit={handleUpdate}>
          <label>Username:</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
          />
          <label>New Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password if changing"
          />
          <button type="submit">Update Account</button>
        </Form>
      ) : (
        <p>Loading account settings...</p>
      )}
      <DeleteButton onClick={handleDeleteAccount}>Delete Account</DeleteButton>
      <div>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Back to Homepage
        </button>
      </div>
    </SettingsContainer>
  );
};

const SettingsContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    text-align: left;
    font-weight: bold;
  }
  input {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    background: #5C787E;
    color: #fff;
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
    &:hover {
      background: #7b999e;
    }
  }
`;

const DeleteButton = styled.button`
  background: #d9534f;
  color: #fff;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2rem;
  &:hover {
    background: #c9302c;
  }
`;

export default AccountSettings;
