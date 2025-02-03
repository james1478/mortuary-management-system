import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getDeceasedListRoute } from "../utils/APIroutes";

const DeceasedList = () => {
  const [deceasedList, setDeceasedList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDeceased = async () => {
      try {
        const response = await axios.get(getDeceasedListRoute);
        setDeceasedList(response.data.deceasedList);
      } catch (error) {
        console.error("Error fetching deceased data:", error);
      }
    };

    fetchDeceased();
  }, []);

  // Function to delete deceased record
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`http://localhost:3090/api/getDeceased/${id}`);
        setDeceasedList(deceasedList.filter(deceased => deceased._id !== id));
      } catch (error) {
        console.error("Error deleting deceased record:", error);
      }
    }
  };

  return (
    <div>
      <h2>Deceased Records</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Nation ID Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {deceasedList.length > 0 ? ( deceasedList.map((deceased, index) => (
            <tr key={deceased._id}>
              <td>{index + 1}</td>
              <td>{deceased.firstName}</td>
              <td>{deceased.lastName}</td>
              <td>{deceased.deceasedNationalId}</td>
              <td>{deceased.age}</td>
              <td>
                <Link to={`/deceased/${deceased._id}`} className="btn btn-info">
                  View
                </Link>
                <button
                  onClick={() => navigate(`/edit-deceased/${deceased._id}`)}
                  className="btn btn-warning mx-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(deceased._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
         )
         )):(
          <tr>
            <td colSpan="6" className="text-center">No deceased records found.</td>
          </tr>
         )}
        </tbody>
      </table>
    </div>
  );
};

export default DeceasedList;
