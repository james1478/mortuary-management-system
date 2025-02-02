// src/components/StaffList.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getStaffListRoute } from "../utils/APIroutes"; 

const StaffList = () => {
  const [staffList, setStaffList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get(getStaffListRoute);
        
        setStaffList(response.data.staffList);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchStaff();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      try {
        await axios.delete(`http://localhost:3090/api/staff/${id}`);
        setStaffList(staffList.filter((staff) => staff._id !== id));
      } catch (error) {
        console.error("Error deleting staff member:", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Staff Members</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Position</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffList.length > 0 ? (
            staffList.map((staff, index) => (
              <tr key={staff._id}>
                <td>{index + 1}</td>
                <td>{staff.fullName}</td>
                <td>{staff.phone}</td>
                <td>{staff.email}</td>
                <td>{staff.position}</td>
                <td>{staff.department}</td>
                <td>
                  <Link to={`/staff/${staff._id}`} className="btn btn-info btn-sm">
                    View
                  </Link>
                  <Link
                    to={`/edit-staff/${staff._id}`}
                    className="btn btn-warning btn-sm ml-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(staff._id)}
                    className="btn btn-danger btn-sm ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No staff members found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StaffList;
