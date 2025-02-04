// src/components/BookingList.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { getBookingsListRoute } from "../utils/APIroutes"; // Ensure this is defined in your APIroutes.js

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(getBookingsListRoute);
        // Assuming backend returns: { status: true, bookings: [...] }
        setBookings(response.data.bookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await axios.delete(`http://localhost:3090/api/booking/${id}`);
        setBookings(bookings.filter((booking) => booking._id !== id));
      } catch (error) {
        console.error("Error deleting booking:", error);
      }
    }
  };

  return (
    <ListContainer>
      <h2>Bookings</h2>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Service Type</th>
            <th>Deceased ID</th>
            <th>Assigned Staff</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings && bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{new Date(booking.date).toLocaleDateString()}</td>
                <td>{booking.serviceType}</td>
                <td>{booking.deceased.deceasedNationalId}</td>
                <td>
                  {booking.staffAssigned && booking.staffAssigned.length > 0
                    ? booking.staffAssigned.map((staff, i) => (
                        <span key={i}>
                          {staff.fullName} ({staff.position})
                          {i < booking.staffAssigned.length - 1 ? ", " : ""}
                        </span>
                      ))
                    : "Not Assigned"}
                </td>
                <td>{booking.notes}</td>
                <td>
                  <Link to={`/booking/${booking._id}`} className="btn btn-info btn-sm">
                    View
                  </Link>
                  <button onClick={() => handleDelete(booking._id)} className="btn btn-danger btn-sm ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ListContainer>
  );
};

export default BookingList;

const ListContainer = styled.div`
  padding: 20px;
  background: #fff;
  margin: 20px;
  border-radius: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
`;
