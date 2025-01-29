import React, { useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const toastOptions = {
  position: "bottom-left",
  autoClose: 7000,
  theme: "dark",
  draggable: true,
  pauseOnHover: true,
};

const DeceasedForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    dateOfDeath: "",
    gender: "",
    causeOfDeath: "",
    familyFirstName: "",
    familyLastName: "",
    phoneNumber: "",
    nationalId: "",
    relationship: "",
    email: "",
  });

  const handleValidation = () => {
    const { firstName, lastName, age, gender, phoneNumber, email } = values;

    if (!firstName || !lastName) {
      toast.error("First and Last Name are required.", toastOptions);
      return false;
    } else if (firstName.length < 3 || lastName.length < 3) {
      toast.error("Names should be at least 3 characters.", toastOptions);
      return false;
    } else if (!age || isNaN(age) || age <= 0) {
      toast.error("Enter a valid age.", toastOptions);
      return false;
    } else if (!gender) {
      toast.error("Please select a gender.", toastOptions);
      return false;
    } else if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Invalid phone number.", toastOptions);
      return false;
    } else if (!email.includes("@") || email.length < 6) {
      toast.error("Invalid email format.", toastOptions);
      return false;
    }

    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      try {
        const { data } = await axios.post("/api/addDeceased", values);
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        } else {
          toast.success("Deceased record added successfully!", toastOptions);
          setValues({
            firstName: "",
            lastName: "",
            age: "",
            dateOfDeath: "",
            gender: "",
            causeOfDeath: "",
            familyFirstName: "",
            familyLastName: "",
            phoneNumber: "",
            nationalId: "",
            relationship: "",
            email: "",
          });
        }
      } catch (error) {
        toast.error("Failed to add deceased record.", toastOptions);
      }
    }
  };

  return (
    <FormContainer>
      <ToastContainer />
      <h4>Fill in all deceased information here.</h4>
      <form onSubmit={handleSubmit} className="row g-3">
        {/* First and Last Name */}
        <div className="input-group">
          <span className="input-group-text">First and Last Name</span>
          <input type="text" name="firstName" maxLength={15} value={values.firstName} onChange={handleChange} className="form-control" placeholder="First Name" />
          <input type="text" name="lastName" maxLength={15} value={values.lastName} onChange={handleChange} className="form-control" placeholder="Last Name" />
        </div>

        {/* Age */}
        <div className="col-md-2">
          <label htmlFor="inputAge" className="form-label">Age</label>
          <input type="text" name="age" maxLength={3} value={values.age} onChange={handleChange} className="form-control" />
        </div>

        {/* Date of Death */}
        <div className="col-md-6">
          <label htmlFor="inputDate" className="form-label">Date of Death</label>
          <input type="date" name="dateOfDeath" value={values.dateOfDeath} onChange={handleChange} className="form-control" />
        </div>

        {/* Gender */}
        <div className="col-md-4">
          <label htmlFor="inputGender" className="form-label">Gender</label>
          <select name="gender" value={values.gender} onChange={handleChange} className="form-select">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Cause of Death */}
        <div className="mb-3">
          <label htmlFor="causeOfDeath" className="form-label">Cause of Death</label>
          <textarea name="causeOfDeath" maxLength={300} value={values.causeOfDeath} onChange={handleChange} className="form-control" rows="3"></textarea>
        </div>

        <hr />
        <h4>Family Member Contact Information</h4>

        {/* Family First and Last Name */}
        <div className="input-group">
          <span className="input-group-text">First and Last Name</span>
          <input type="text" name="familyFirstName" maxLength={15} value={values.familyFirstName} onChange={handleChange} className="form-control" placeholder="First Name" />
          <input type="text" name="familyLastName" maxLength={15} value={values.familyLastName} onChange={handleChange} className="form-control" placeholder="Last Name" />
        </div>

        {/* Phone Number */}
        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">Phone Number</label>
          <input type="text" name="phoneNumber" maxLength={13} value={values.phoneNumber} onChange={handleChange} className="form-control" />
        </div>

        {/* National ID */}
        <div className="col-md-2">
          <label htmlFor="inputNationalid" className="form-label">National ID Number</label>
          <input type="text" name="nationalId" maxLength={8} value={values.nationalId} onChange={handleChange} className="form-control" />
        </div>

        {/* Relationship with Deceased */}
        <div className="col-md-4">
          <label htmlFor="inputRelationshipType" className="form-label">Relationship with the Deceased</label>
          <select name="relationship" value={values.relationship} onChange={handleChange} className="form-select">
            <option value="">Select Relationship Type</option>
            <option value="Husband">Husband</option>
            <option value="Wife">Wife</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
            <option value="Guardian">Guardian</option>
          </select>
        </div>

        {/* Email Address */}
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">Email Address</label>
          <input type="email" name="email" maxLength={40} value={values.email} onChange={handleChange} className="form-control" />
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add Deceased</button>
        </div>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 20px;
`;

export default DeceasedForm;
