import React, { useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { addStaffRoute } from "../utils/APIroutes";
const toastOptions = {
  position: "bottom-left",
  autoClose: 7000,
  theme: "dark",
  draggable: true,
  pauseOnHover: true,
};

const StaffForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    NationalId: "",
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

  const handleValidation = () => {
    const {
      fullName,
      phone,
      email,
      address,
      position,
      department,
      dateOfHire,
      salary,
      emergencyName,
      emergencyPhone,
      emergencyEmail,
      emergencyAddress,
      emergencyRelationship,
    } = values;

    if (!fullName || fullName.length < 3) {
      toast.error("Full Name must be at least 3 characters.", toastOptions);
      return false;
    } else if (!phone || phone.length < 10) {
      toast.error("Invalid phone number.", toastOptions);
      return false;
    } else if (!email.includes("@") || email.length < 6) {
      toast.error("Invalid email format.", toastOptions);
      return false;
    } else if (!address || address.length < 5) {
      toast.error("Address must be at least 5 characters.", toastOptions);
      return false;
    } else if (!position) {
      toast.error("Please enter the staff position.", toastOptions);
      return false;
    } else if (!department) {
      toast.error("Please select a department.", toastOptions);
      return false;
    } else if (!dateOfHire) {
      toast.error("Please enter the Date of Hire.", toastOptions);
      return false;
    } else if (!salary || salary <= 0) {
      toast.error("Salary must be a positive number.", toastOptions);
      return false;
    } else if (!emergencyName || emergencyName.length < 3) {
      toast.error("Emergency Contact Name must be at least 3 characters.", toastOptions);
      return false;
    } else if (!emergencyPhone || emergencyPhone.length < 10) {
      toast.error("Invalid emergency contact phone number.", toastOptions);
      return false;
    } else if (!emergencyEmail.includes("@") || emergencyEmail.length < 6) {
      toast.error("Invalid emergency contact email format.", toastOptions);
      return false;
    } else if (!emergencyAddress || emergencyAddress.length < 5) {
      toast.error("Emergency Address must be at least 5 characters.", toastOptions);
      return false;
    } else if (!emergencyRelationship) {
      toast.error("Please specify the emergency contact relationship.", toastOptions);
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
        const { data } = await axios.post(addStaffRoute, values);
  
        // Ensures `data.status` is properly checked
        if (data && data.status === false) {
          toast.error(data.msg || "An error occurred.", toastOptions);
        } else if (data && data.status === true) {
          toast.success("Staff member added successfully!", toastOptions);
  
          setValues({
            fullName: "",
            phone: "",
            NationalId: "",
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
        }
      } catch (error) {
      
        console.error("Error submitting staff info:", error);
        toast.error(error.response?.data?.msg || "Failed to add staff member.", toastOptions);
      }
    }
  };
  

  return (
    <FormContainer>
       <ToastContainer />
       <div>
       <h4>Staff Information</h4>
      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Staff Details */}
        <div className="col-md-6">
          <label htmlFor="inputFullName" className="form-label">Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            maxLength={30} 
            className="form-control" 
            value={values.fullName} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">Phone Number</label>
          <input 
            type="text" 
            name="phone" 
            maxLength={10} 
            className="form-control" 
            value={values.phone} 
            onChange={handleChange} 
          />
        </div>
         {/* Staff National ID */}
         <div className="col-md-2">
          <label htmlFor="inputNationalid" className="form-label">National ID Number</label>
          <input type="text" name="NationalId" maxLength={8} value={values.NationalId} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">Email Address</label>
          <input 
            type="email" 
            name="email" 
            maxLength={40} 
            className="form-control" 
            value={values.email} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input 
            type="text" 
            name="address" 
            className="form-control" 
            maxLength={80} 
            value={values.address} 
            onChange={handleChange} 
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputDateOfHire" className="form-label">Date of Hire</label>
          <input 
            type="date" 
            name="dateOfHire" 
            className="form-control" 
            value={values.dateOfHire} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputPosition" className="form-label">Position</label>
          <select
            name="position" 
            className="form-select" 
            value={values.position} 
            onChange={handleChange}
            >
            <option value="">Select Position</option>
            <option value="Mortician">Mortician</option>
            <option value="Crematorium Operator">Crematorium Operator</option>
            <option value="Funeral Planner">Funeral Planner</option>
            <option value="Security Guard">Security Guard</option>
            <option value="Hearse Driver">Hearse Driver</option>
            <option value="Administrator">Administrator</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Forensic Pathologist">Forensic Pathologist</option>
            <option value=" Medical Examiner"> Medical Examiner</option>
            <option value=" Cleaning Staff"> Cleaning Staff</option>
            <option value="Maintenance Technician">Maintenance Technician</option>
            <option value=" IT Technician"> IT Technician</option>
            <option value="Accountant">Accountant</option>
            <option value="Legal Advisor">Legal Advisor</option>
            <option value="Compliance Officer">Compliance Officer</option>
          </select>
            
        </div>

        <div className="col-md-6">
          <label htmlFor="inputDepartment" className="form-label">Department</label>
          <select 
            name="department" 
            className="form-select" 
            value={values.department} 
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="BodyPreparation">Body Preparation</option>
            <option value="CremationServices">Cremation Services</option>
            <option value="Funeral Planning">Funeral Planning and Coordination</option>
            <option value="SecurityServices">Security Services</option>
            <option value="TransportationServices">Transportation Services</option>
            <option value="Administrative Services">Administrative Services</option>
            <option value="Medical&Pathology">Medical & Pathology</option>
            <option value="Cleaning&Maintenance">Cleaning & Maintenance</option>
            <option value="IT&DigitalServices">IT & Digital Services</option>
            <option value="Finance&Accounts">Finance & Accounts</option>
            <option value="Legal&Compliance">Legal & Compliance</option>
          </select>
        </div>


        <div className="col-md-6">
          <label htmlFor="inputSalary" className="form-label">Salary (Ksh)</label>
          <input 
            type="text" 
            name="salary" 
            className="form-control" 
            value={values.salary} 
            onChange={handleChange} 
          />
        </div>

        {/* Emergency Contact Details */}
        <h4>Emergency Contact Details</h4>

        <div className="col-md-6">
          <label htmlFor="inputEmergencyName" className="form-label">Emergency Contact Name</label>
          <input 
            type="text" 
            name="emergencyName" 
            maxLength={30} 
            className="form-control" 
            value={values.emergencyName} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmergencyPhone" className="form-label">Emergency Phone Number</label>
          <input 
            type="text" 
            name="emergencyPhone" 
            maxLength={10} 
            className="form-control" 
            value={values.emergencyPhone} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmergencyEmail" className="form-label">Emergency Email</label>
          <input 
            type="email" 
            maxLength={40} 
            name="emergencyEmail" 
            className="form-control" 
            value={values.emergencyEmail} 
            onChange={handleChange} 
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmergencyEmail" className="form-label">Address</label>
          <input 
            type="text" 
            maxLength={80} 
            name="emergencyAddress" 
            className="form-control" 
            value={values.emergencyAddress} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-md-4">
  <label htmlFor="inputEmergencyRelationship" className="form-label">Emergency Contact Relationship</label>
  <select name="emergencyRelationship" value={values.emergencyRelationship} onChange={handleChange} className="form-select">
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


        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add Staff</button>
        </div>
      </form>
       </div>
      
      <ToastContainer />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 20px;
`;

export default StaffForm;
