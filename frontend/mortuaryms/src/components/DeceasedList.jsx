import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getDeceasedListRoute } from "../utils/APIroutes";

const DeceasedList = () => {
  const [deceasedList, setDeceasedList] = useState([]);

  useEffect(() => {
    const fetchDeceased = async () => {
      try {
        const response = await axios.get(getDeceasedListRoute);
        setDeceasedList(response.data.deceasedList); // Ensure correct data extraction
      } catch (error) {
        console.error("Error fetching deceased data:", error);
      }
    };

    fetchDeceased();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Deceased Records</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Date of Death</th>
            <th scope="col">Gender</th>
            <th scope="col">Cause of Death</th>
            <th scope="col">Family Contact</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {deceasedList.length > 0 ? (
            deceasedList.map((deceased, index) => (
              <tr key={deceased._id}>
                <th scope="row">{index + 1}</th>
                <td>{deceased.firstName}</td>
                <td>{deceased.lastName}</td>
                <td>{deceased.age}</td>
                <td>{new Date(deceased.dateOfDeath).toLocaleDateString()}</td>
                <td>{deceased.gender}</td>
                <td>{deceased.causeOfDeath}</td>
                <td>{deceased.familyPhoneNumber}</td>
                <td>
                  <Link
                    to={`/deceased/${deceased._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DeceasedList;
