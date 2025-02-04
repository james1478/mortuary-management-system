import React, { useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { addInventoryRoute } from "../utils/APIroutes";

const toastOptions = {
  position: "bottom-left",
  autoClose: 7000,
  theme: "dark",
  draggable: true,
  pauseOnHover: true,
};

const InventoryForm = () => {
  const [values, setValues] = useState({
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

  const handleValidation = () => {
    const {
      itemName,
      category,
      quantity,
      unitPrice,
      dateOfPurchase,
      supplierName,
      supplierPhone,
      supplierEmail,
      supplierAddress,
    } = values;

    if (!itemName || itemName.length < 3) {
      toast.error("Item Name must be at least 3 characters.", toastOptions);
      return false;
    } else if (!category) {
      toast.error("Please select an item category.", toastOptions);
      return false;
    } else if (!quantity || quantity <= 0) {
      toast.error("Quantity must be a positive number.", toastOptions);
      return false;
    } else if (!unitPrice || unitPrice <= 0) {
      toast.error("Unit Price must be a positive number.", toastOptions);
      return false;
    } else if (!dateOfPurchase) {
      toast.error("Please enter the Date of Purchase.", toastOptions);
      return false;
    } else if (!supplierName || supplierName.length < 3) {
      toast.error("Supplier Name must be at least 3 characters.", toastOptions);
      return false;
    } else if (!supplierPhone || supplierPhone.length < 10) {
      toast.error("Invalid supplier phone number.", toastOptions);
      return false;
    } else if (!supplierEmail.includes("@") || supplierEmail.length < 6) {
      toast.error("Invalid supplier email format.", toastOptions);
      return false;
    } else if (!supplierAddress || supplierAddress.length < 5) {
      toast.error("Supplier Address must be at least 5 characters.", toastOptions);
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
        const { data } = await axios.post(addInventoryRoute, values);
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        } else {
          toast.success("Inventory item added successfully!", toastOptions);
          setValues({
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
        }
      } catch (error) {
        toast.error("Failed to add inventory item.", toastOptions);
      }
    }
  };

  return (
    <FormContainer>
        <ToastContainer />
        <div>
        <h4>Fill in Inventory Details</h4>
      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Item Details */}
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Item Name</label>
          <input 
            type="text" 
            name="itemName" 
            maxLength={30} 
            className="form-control" 
            value={values.itemName} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputCategory" className="form-label">Category</label>
          <select 
            id="inputCategory" 
            name="category" 
            className="form-select" 
            value={values.category} 
            onChange={handleChange}
          >
            <option value="">Choose Item Category</option>
            <option value="Chemicals">Chemicals</option>
            <option value="Protective Gear">Protective Gear</option>
            <option value="Equipment">Equipment</option>
            <option value="Consumables">Consumables</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>

        <div className="col-md-2">
          <label htmlFor="inputQuantity" className="form-label">Quantity</label>
          <input 
            type="text" 
            name="quantity" 
            className="form-control" 
            value={values.quantity} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputUnitPrice" className="form-label">Price per Item (Ksh)</label>
          <input 
            type="text" 
            name="unitPrice" 
            className="form-control" 
            value={values.unitPrice} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputDateOfPurchase" className="form-label">Date of Purchase</label>
          <input 
            type="date" 
            name="dateOfPurchase" 
            className="form-control" 
            value={values.dateOfPurchase} 
            onChange={handleChange} 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">Short Description of the Item</label>
          <textarea 
            className="form-control" 
            name="description" 
            maxLength={200} 
            rows="3" 
            value={values.description} 
            onChange={handleChange} 
          />
        </div>

        {/* Supplier Details */}
        <h4>Supplier Details</h4>
        
        <div className="col-md-6">
          <label htmlFor="inputSupplierName" className="form-label">Supplier Name</label>
          <input 
            type="text" 
            name="supplierName" 
            maxLength={30} 
            className="form-control" 
            value={values.supplierName} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputSupplierPhone" className="form-label">Phone Number</label>
          <input 
            type="text" 
            name="supplierPhone" 
            maxLength={10} 
            className="form-control" 
            value={values.supplierPhone} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputSupplierEmail" className="form-label">Email Address</label>
          <input 
            type="email" 
            name="supplierEmail" 
            maxLength={40} 
            className="form-control" 
            value={values.supplierEmail} 
            onChange={handleChange} 
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputSupplierAddress" className="form-label">Address</label>
          <input 
            type="text" 
            name="supplierAddress" 
            maxLength={80} 
            className="form-control" 
            value={values.supplierAddress} 
            onChange={handleChange} 
            placeholder="1234 Main St" 
          />
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add Item</button>
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

export default InventoryForm;
