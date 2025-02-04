// src/pages/EditDeceased.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const EditDeceased = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    dateOfDeath: "",
    gender: "",
    causeOfDeath: "",
    deceasedNationalId: "",
    familyFirstName: "",
    familyLastName: "",
    familyPhoneNumber: "",
    familyNationalId: "",
    familyEmail: "",
    familyAddress: "",
    relationship: ""
  });

  useEffect(() => {
    const fetchDeceased = async () => {
      try {
        const response = await axios.get(`http://localhost:3090/api/getDeceased/${id}`);
        const data = response.data.deceased;
        // Format the date for the date input (assumes data.dateOfDeath is a valid date)
        if (data.dateOfDeath) {
          data.dateOfDeath = new Date(data.dateOfDeath).toISOString().split("T")[0];
        }
        setFormData(data);
      } catch (error) {
        console.error("Error fetching deceased details:", error);
      }
    };

    fetchDeceased();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3090/api/getDeceased/${id}`, formData);
      alert("Record updated successfully!");
      navigate("/homepage");
    } catch (error) {
      console.error("Error updating deceased record:", error);
      alert("Failed to update record.");
    }
  };

  return (
    <Container>
      <h2>Edit Deceased Record</h2>
      <Form onSubmit={handleSubmit}>
        <Field>
          <label>First Name:</label>
          <input 
            type="text" 
            maxLength={15}
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <Field>
          <label>Last Name:</label>
          <input 
            type="text" 
            maxLength={15}
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <Field>
          <label>Age:</label>
          <input 
            type="number" 
            maxLength={3}
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <Field>
          <label>Date of Death:</label>
          <input 
            type="date" 
            name="dateOfDeath" 
            value={formData.dateOfDeath} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <Field>
          <label>Gender:</label>
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </Field>
        <Field>
          <label>Cause of Death:</label>
          <textarea 
            name="causeOfDeath" 
            maxLength={400}
            value={formData.causeOfDeath} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <Field>
          <label>Deceased National ID Number:</label>
          <input 
            type="text" 
            maxLength={8}
            name="deceasedNationalId" 
            value={formData.deceasedNationalId} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <hr />
        <h3>Family Member Contact Information</h3>
        <Field>
          <label>Family First Name:</label>
          <input 
            type="text" 
            maxLength={15}
            name="familyFirstName" 
            value={formData.familyFirstName} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <Field>
          <label>Family Last Name:</label>
          <input 
            type="text" 
            maxLength={15}
            name="familyLastName" 
            value={formData.familyLastName} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <Field>
          <label>Family Phone Number:</label>
          <input 
            type="text" 
            maxLength={10}
            name="familyPhoneNumber" 
            value={formData.familyPhoneNumber} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <Field>
          <label>Family National ID Number:</label>
          <input 
            type="text" 
            maxLength={8}
            name="familyNationalId" 
            value={formData.familyNationalId} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <Field>
          <label>Family Email:</label>
          <input 
            type="email" 
            maxLength={40}
            name="familyEmail" 
            value={formData.familyEmail} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <Field>
          <label>Family Address:</label>
          <input 
            type="text" 
            maxLength={80}
            name="familyAddress" 
            value={formData.familyAddress} 
            onChange={handleChange} 
            required 
          />
        </Field>
        <Field>
          <label>Relationship with Deceased:</label>
          <select 
            name="relationship" 
            value={formData.relationship} 
            onChange={handleChange} 
            required
          >
            <option value="">Select Relationship Type</option>
            <option value="Husband">Husband</option>
            <option value="Wife">Wife</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
            <option value="Guardian">Guardian</option>
          </select>
        </Field>
        <Button type="submit">Update</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  input, textarea, select {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  background: #5C787E;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #7b999e;
  }
`;

export default EditDeceased;
