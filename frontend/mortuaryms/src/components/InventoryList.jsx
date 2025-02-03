import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getInventoryListRoute } from "../utils/APIroutes";

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(getInventoryListRoute);
        // Assuming your backend returns: { status: true, items: [...] }
        setInventory(response.data.items);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this inventory item?")) {
      try {
        await axios.delete(`http://localhost:3090/api/inventory/${id}`);
        setInventory(inventory.filter((item) => item._id !== id));
      } catch (error) {
        console.error("Error deleting inventory item:", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Inventory Items</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Unit Price (Ksh)</th>
            <th>Date of Purchase</th>
            <th>Supplier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.length > 0 ? (
            inventory.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.itemName}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{new Date(item.dateOfPurchase).toLocaleDateString()}</td>
                <td>{item.supplier.name}</td>
                <td>
                  <Link to={`/inventory/${item._id}`} className="btn btn-info btn-sm">
                    View
                  </Link>
                  <Link to={`/edit-inventory/${item._id}`} className="btn btn-warning btn-sm ml-2">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-danger btn-sm ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No inventory items found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
