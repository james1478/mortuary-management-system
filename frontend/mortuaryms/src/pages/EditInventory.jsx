// src/pages/EditInventory.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditInventory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantity: "",
    unitPrice: "",
    dateOfPurchase: "",
    description: "",
    supplierName: "",
    supplierPhone: "",
    supplierEmail: "",
    supplierAddress: "",
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3090/api/inventory/${id}`);
        const item = response.data.item;
        setFormData({
          itemName: item.itemName,
          category: item.category,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          dateOfPurchase: new Date(item.dateOfPurchase).toISOString().split("T")[0],
          description: item.description,
          supplierName: item.supplier.name,
          supplierPhone: item.supplier.phone,
          supplierEmail: item.supplier.email,
          supplierAddress: item.supplier.address,
        });
      } catch (error) {
        console.error("Error fetching inventory details:", error);
      }
    };

    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/inventory/${id}`, formData);
      alert("Inventory item updated successfully!");
      navigate("/inventorylist"); // Adjust route as needed
    } catch (error) {
      console.error("Error updating inventory item:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Inventory Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Item Name:</label>
        <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} required />

        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Equipment">Equipment</option>
          <option value="Consumables">Consumables</option>
          <option value="Clothing">Clothing</option>
        </select>

        <label>Quantity:</label>
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />

        <label>Unit Price (Ksh):</label>
        <input type="number" name="unitPrice" value={formData.unitPrice} onChange={handleChange} required />

        <label>Date of Purchase:</label>
        <input type="date" name="dateOfPurchase" value={formData.dateOfPurchase} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />

        <label>Supplier Name:</label>
        <input type="text" name="supplierName" value={formData.supplierName} onChange={handleChange} required />

        <label>Supplier Phone:</label>
        <input type="text" name="supplierPhone" value={formData.supplierPhone} onChange={handleChange} required />

        <label>Supplier Email:</label>
        <input type="email" name="supplierEmail" value={formData.supplierEmail} onChange={handleChange} required />

        <label>Supplier Address:</label>
        <input type="text" name="supplierAddress" value={formData.supplierAddress} onChange={handleChange} required />

        <button type="submit">Update Inventory Item</button>
      </form>
    </div>
  );
};

export default EditInventory;
