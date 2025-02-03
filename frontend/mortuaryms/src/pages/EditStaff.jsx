// src/pages/EditStaff.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditStaff = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    position: "",
    department: "",
    dateOfHire: "",
    salary: "",
    emergencyName: "",
    emergencyPhone: "",
    emergencyEmail: "",
    emergencyAddress: "",
    emergencyRelationship: "",
  });

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get(`http://localhost:3090/api/staff/${id}`);
        const staff = response.data.staff;
        setFormData({
          fullName: staff.fullName || "",
          phone: staff.phone || "",
          NationalId: staff.NationalId || "",
          email: staff.email || "",
          address: staff.address || "",
          position: staff.position || "",
          department: staff.department || "",
          dateOfHire: staff.dateOfHire
            ? new Date(staff.dateOfHire).toISOString().split("T")[0]
            : "",
          salary: staff.salary || "",
          emergencyName: staff.emergencyName || "",
          emergencyPhone: staff.emergencyPhone || "",
          emergencyEmail: staff.emergencyEmail || "",
          emergencyAddress: staff.emergencyAddress || "",
          emergencyRelationship: staff.emergencyRelationship || "",
        });
      } catch (error) {
        console.error("Error fetching staff details:", error);
      }
    };

    fetchStaff();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3090/api/staff/${id}`, formData);
      alert("Staff member updated successfully!");
      navigate("/stafflist"); // Adjust route as needed
    } catch (error) {
      console.error("Error updating staff member:", error);
      alert("Failed to update staff member.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Staff Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>National ID:</label>
          <input
            type="text"
            name="NationalId"
            value={formData.NationalId}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Department:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Select Department</option>
            <option value="Administration">Administration</option>
            <option value="Operations">Operations</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date of Hire:</label>
          <input
            type="date"
            name="dateOfHire"
            value={formData.dateOfHire}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Salary (Ksh):</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <h4>Emergency Contact Details</h4>

        <div className="form-group">
          <label>Emergency Contact Name:</label>
          <input
            type="text"
            name="emergencyName"
            value={formData.emergencyName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Emergency Phone:</label>
          <input
            type="text"
            name="emergencyPhone"
            value={formData.emergencyPhone}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Emergency Email:</label>
          <input
            type="email"
            name="emergencyEmail"
            value={formData.emergencyEmail}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Emergency Address:</label>
          <input
            type="text"
            name="emergencyAddress"
            value={formData.emergencyAddress}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Emergency Relationship:</label>
          <select
            name="emergencyRelationship"
            value={formData.emergencyRelationship}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Select Relationship</option>
            <option value="Husband">Husband</option>
            <option value="Wife">Wife</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
            <option value="Guardian">Guardian</option>
            <option value="Friend">Friend</option>
            <option value="Colleague">Colleague</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Update Staff Member
        </button>
      </form>
    </div>
  );
};

export default EditStaff;
