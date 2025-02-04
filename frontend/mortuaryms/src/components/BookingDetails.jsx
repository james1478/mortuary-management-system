// src/pages/BookingDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { getBookingsDetailsRoute } from "../utils/APIroutes"; // Ensure this is defined

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`${getBookingsDetailsRoute}/${id}`);
        setBooking(response.data.booking);
      } catch (error) {
        console.error("Error fetching booking details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  if (loading) return <p>Loading booking details...</p>;
  if (!booking) return <p>Booking not found.</p>;

  return (
    <DetailsContainer>
      <h2>Booking Details</h2>
      <DetailRow>
        <strong>Date:</strong>
        <span>{new Date(booking.date).toLocaleDateString()}</span>
      </DetailRow>
      <DetailRow>
        <strong>Service Type:</strong>
        <span>{booking.serviceType}</span>
      </DetailRow>
      <DetailRow>
        <strong>Deceased National ID:</strong>
        <span>{booking.deceased.deceasedNationalId}</span>
      </DetailRow>
      <DetailRow>
        <strong>Assigned Staff:</strong>
        <span>
          {booking.staffAssigned && booking.staffAssigned.length > 0
            ? booking.staffAssigned.map((staff, i) => (
                <span key={i}>
                  {staff.fullName} ({staff.position})
                  {i < booking.staffAssigned.length - 1 ? ", " : ""}
                </span>
              ))
            : "Not Assigned"}
        </span>
      </DetailRow>
      <DetailRow>
        <strong>Notes:</strong>
        <span>{booking.notes}</span>
      </DetailRow>
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </DetailsContainer>
  );
};

export default BookingDetails;

const DetailsContainer = styled.div`
  padding: 20px;
  background: #fff;
  margin: 20px;
  border-radius: 8px;
`;

const DetailRow = styled.div`
  margin-bottom: 10px;
  strong {
    width: 200px;
    display: inline-block;
  }
  span {
    color: #333;
  }
`;

const BackButton = styled.button`
  padding: 0.5rem 1rem;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background: #555;
  }
`;
