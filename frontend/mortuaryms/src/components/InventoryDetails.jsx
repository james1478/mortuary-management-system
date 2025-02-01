// src/pages/InventoryDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getInventoryDetailsRoute } from "../utils/APIroutes";

const InventoryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${getInventoryDetailsRoute}/${id}`);
        setItem(response.data.item);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching inventory details:", error);
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p>Loading details...</p>;
  if (!item) return <p>Inventory item not found.</p>;

    // Calculate total cost
    const totalCost = item.quantity * item.unitPrice;
  return (
    <div className="container mt-4">
      <h2>Inventory Details</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Item Name</th>
            <td>{item.itemName}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{item.category}</td>
          </tr>
          <tr>
            <th>Quantity</th>
            <td>{item.quantity}</td>
          </tr>
          <tr>
            <th>Unit Price (Ksh)</th>
            <td>{item.unitPrice}</td>
          </tr>
          <tr>
            <th>Date of Purchase</th>
            <td>{new Date(item.dateOfPurchase).toLocaleDateString()}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{item.description}</td>
          </tr>
          <tr>
            <th>Supplier Name</th>
            <td>{item.supplier.name}</td>
          </tr>
          <tr>
            <th>Supplier Phone</th>
            <td>{item.supplier.phone}</td>
          </tr>
          <tr>
            <th>Supplier Email</th>
            <td>{item.supplier.email}</td>
          </tr>
          <tr>
            <th>Supplier Address</th>
            <td>{item.supplier.address}</td>
          </tr>
          <tr>
            <th>Total Cost (Ksh)</th>
            <td>{totalCost}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default InventoryDetails;
