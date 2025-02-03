import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditDeceased = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    causeOfDeath: "",
  });

  useEffect(() => {
    const fetchDeceased = async () => {
      try {
        const response = await axios.get(`http://localhost:3090/api/getDeceased/${id}`);
        setFormData(response.data.deceased);
      } catch (error) {
        console.error("Error fetching deceased details:", error);
      }
    };

    fetchDeceased();
  }, [id]);

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3090/api/getDeceased/${id}`, formData);
      alert("Record updated successfully!");
      navigate("/deceasedlist");
    } catch (error) {
      console.error("Error updating deceased record:", error);
    }
  };

  return (
    <div>
      <h2>Edit Deceased Record</h2>
      <form onSubmit={handleSubmit}>
        <div>
           <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

        </div>
       <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

       </div>
        
        <div>
           <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        </div>
        <div>
           <label>National ID Number:</label>
        <input type="number" name="age" value={formData.deceasedNationalId} onChange={handleChange} required />

        </div>
       <div>
        <label>Cause of Death:</label>
        <input type="text" name="causeOfDeath" value={formData.causeOfDeath} onChange={handleChange} required />

       </div>
        
        <div>
          <button type="submit">Update</button>
        </div>
        
      </form>
    </div>
  );
};

export default EditDeceased;
