import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getDeceasedDetailsRoute } from "../utils/APIroutes";

const DeceasedDetails = () => {
  const { id } = useParams(); // Get the deceased ID from URL
  const navigate = useNavigate();
  const [deceased, setDeceased] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeceasedDetails = async () => {
      try {
        const response = await axios.get(`${getDeceasedDetailsRoute}/${id}`);
        setDeceased(response.data.deceased);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching deceased details:", error);
        setLoading(false);
      }
    };
    

    fetchDeceasedDetails();
  }, [id]);

  if (loading) return <p>Loading details...</p>;
  if (!deceased) return <p>Deceased record not found.</p>;

  return (
    <div className="container mt-4">
      <h2>Deceased Details</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>First Name</th>
            <td>{deceased.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{deceased.lastName}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{deceased.age}</td>
          </tr>
          <tr>
            <th>Date of Death</th>
            <td>{new Date(deceased.dateOfDeath).toLocaleDateString()}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{deceased.gender}</td>
          </tr>
          <tr>
            <th>Cause of Death</th>
            <td>{deceased.causeOfDeath}</td>
          </tr>
          <tr>
            <th>Family Contact</th>
            <td>{deceased.familyPhoneNumber}</td>
          </tr>
          <tr>
            <th>Family Address</th>
            <td>{deceased.familyAddress}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default DeceasedDetails;
