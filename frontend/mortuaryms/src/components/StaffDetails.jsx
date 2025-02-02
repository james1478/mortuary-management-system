// src/pages/StaffDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getStaffDetailsRoute } from "../utils/APIroutes"; // Define this in APIroutes.js

const StaffDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get(`${getStaffDetailsRoute}/${id}`);
        setStaff(response.data.staff);
      } catch (error) {
        console.error("Error fetching staff details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, [id]);

  if (loading) return <p>Loading staff details...</p>;
  if (!staff) return <p>Staff member not found.</p>;

  return (
    <div className="container mt-4">
      <h2>Staff Details</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Full Name</th>
            <td>{staff.fullName}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{staff.phone}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{staff.email}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{staff.address}</td>
          </tr>
          <tr>
            <th>Position</th>
            <td>{staff.position}</td>
          </tr>
          <tr>
            <th>Department</th>
            <td>{staff.department}</td>
          </tr>
          <tr>
            <th>Date of Hire</th>
            <td>{new Date(staff.dateOfHire).toLocaleDateString()}</td>
          </tr>
          <tr>
            <th>Salary (Ksh)</th>
            <td>{staff.salary}</td>
          </tr>
          <tr>
            <th>Emergency Contact Name</th>
            <td>{staff.emergencyName}</td>
          </tr>
          <tr>
            <th>Emergency Phone</th>
            <td>{staff.emergencyPhone}</td>
          </tr>
          <tr>
            <th>Emergency Email</th>
            <td>{staff.emergencyEmail}</td>
          </tr>
          <tr>
            <th>Emergency Address</th>
            <td>{staff.emergencyAddress}</td>
          </tr>
          <tr>
            <th>Emergency Relationship</th>
            <td>{staff.emergencyRelationship}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default StaffDetails;
