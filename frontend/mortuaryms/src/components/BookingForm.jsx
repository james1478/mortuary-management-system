// src/components/BookingForm.jsx
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addBookingRoute } from "../utils/APIroutes";

const toastOptions = {
  position: "bottom-left",
  autoClose: 7000,
  theme: "dark",
  draggable: true,
  pauseOnHover: true,
};

const BookingForm = () => {
  const [values, setValues] = useState({
    date: "",
    serviceType: "",
    deceasedNationalId: "",
    notes: "",
  });

  const handleValidation = () => {
    const { date, serviceType, deceasedNationalId } = values;

    if (!date) {
      toast.error("Please select a date.", toastOptions);
      return false;
    }
    if (!serviceType) {
      toast.error("Please select a service type.", toastOptions);
      return false;
    }
    if (!deceasedNationalId) {
      toast.error("Please enter the deceased's National ID.", toastOptions);
      return false;
    }
    // Example: National ID must be exactly 8 characters
    if (deceasedNationalId.length !== 8) {
      toast.error("Deceased National ID must be exactly 8 characters.", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;

    try {
      const { data } = await axios.post(addBookingRoute, values);
      console.log(data);
      if (data.status) {
        toast.success("Booking created successfully!", toastOptions);
        setValues({
          date: "",
          serviceType: "",
          deceasedNationalId: "",
          notes: "",
        });
      } else {
        toast.error("Error: " + data.msg, toastOptions);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      toast.error("Failed to create booking.Staff for that type of service may not be Available at the moment.Or", toastOptions);
      toast.error("Check if the Deceased National Id is correct.", toastOptions);
    }
  };

  return (
    <FormContainer>
      <ToastContainer />
      <h2>Make a Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Service Type:</label>
          <select
            name="serviceType"
            value={values.serviceType}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Select Service Type</option>
            <option value="Burial">Burial</option>
            <option value="Cremation">Cremation</option>
            <option value="Memorial">Memorial</option>
          </select>
        </div>
        <div className="form-group">
          <label>Deceased National ID Number:</label>
          <input
            type="text"
            name="deceasedNationalId"
            value={values.deceasedNationalId}
            onChange={handleChange}
            required
            className="form-control"
            maxLength={8}
          />
        </div>
        <div className="form-group">
          <label>Notes:</label>
          <textarea
            name="notes"
            value={values.notes}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Create Booking
        </button>
      </form>
    </FormContainer>
  );
};

export default BookingForm;

const FormContainer = styled.div`
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 20px;
`;
